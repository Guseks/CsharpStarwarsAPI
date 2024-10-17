namespace CsharpStarwarsAPI.Controllers
{
  using CsharpStarwarsAPI.Character;
  using CsharpStarwarsAPI.Services;
  using Microsoft.AspNetCore.Mvc;
  using System.Net;
  using System.Threading.Tasks;
  using System.Text.Json;
  using System.Linq;
  using System;

  public class AddCharacterRequest
  {
    public string Name { get; set; }
  }



  [Route("swapi/[controller]")]
  [ApiController]
  public class CharactersController : ControllerBase
  {

    private readonly HttpClient _httpClient;
    private readonly CharacterService _characterService;
    private List<Character> _characterCollection = new List<Character>();

    public CharactersController(HttpClient httpClient, CharacterService characterService)
    {
      _httpClient = httpClient;
      _characterService = characterService; // Initialize the service
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      if (!_characterService.HasCharacters())
      {
        return Ok(new { message = "No characters in collection" });
      }
      else
      {
        return Ok(_characterService.GetAllCharacters());
      }
    }
    [HttpPut("add")]
    public async Task<IActionResult> AddCharacter([FromBody] AddCharacterRequest request)
    {
      string name = request.Name.Trim();
      string apiUrl = $"https://swapi.dev/api/people/?search={name}";
      try
      {
        // Send the GET request to the external API
        HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);

        // Ensure the request was successful
        response.EnsureSuccessStatusCode();

        // Read the response content as a string
        string responseData = await response.Content.ReadAsStringAsync();

        var characterResponse = JsonSerializer.Deserialize<CharacterResponse>(responseData, new JsonSerializerOptions
        {
          PropertyNameCaseInsensitive = true // Ensures case-insensitive mapping
        });
        List<Character> foundCharacters = characterResponse.Results;

        if (foundCharacters.Count == 0)
        {
          return NotFound($"Character with name {name} not found. Failed to add character");
        }
        else if (foundCharacters.Count > 1)
        {
          string[] names = foundCharacters.Select(c => c.Name).ToArray();
          return BadRequest(new
          {
            message = $"Multiple characters found based on name {name}",
            characters = names
          });
        }

        //Single Character Found
        _characterService.AddCharacter(foundCharacters.First());
        return StatusCode((int)HttpStatusCode.Created, new
        {
          message = $"Character with name {name} added to collection",
          character = foundCharacters
        });
      }
      catch (Exception e)
      {
        Console.WriteLine($"Something went wrong! {e.Message}");
        return StatusCode((int)HttpStatusCode.InternalServerError, "An error occurred while processing your request.");
      }
    }

    [HttpDelete("delete/{name}")]
    public IActionResult DeleteCharacter([FromRoute] string name)
    {

      if (_characterService.CharacterExists(name))
      {
        Console.WriteLine($"Deleting Character with name {name}");
        _characterService.DeleteCharacter(name);
        return Ok(new { message = $"Character with name {name} deleted from collection" });
      }
      else
      {
        return NotFound($"Character with name {name} not found. Failed to delete character");
      }
    }

    [HttpPost("swap")]
    public IActionResult SwapCharacters([FromBody] SwapCharactersRequest request)
    {
      string name1 = request.Names.First();
      string name2 = request.Names.Last();

      if (_characterService.CharacterExists(name1) && _characterService.CharacterExists(name2))
      {
        _characterService.SwapCharacters(name1, name2);
        return Ok(new { message = $"Characters with name {name1} and name {name2} swapped successfully." });
      }
      else
      {
        return BadRequest(new { message = $"Characters with name {name1} and name {name2} not found. Failed to swap characters" });
      }
      //string name2 = request.names[1].Trim();
      //Console.WriteLine($"Body: {request.Names}");
    }

    public class SwapCharactersRequest
    {
      public List<string> Names { get; set; }
    }
  }
}