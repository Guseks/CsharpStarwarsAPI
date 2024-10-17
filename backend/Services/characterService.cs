namespace CsharpStarwarsAPI.Services
{
  using CsharpStarwarsAPI.Character;


  public class CharacterService
  {
    private readonly List<Character> _characterCollection = new List<Character>();

    public void AddCharacter(Character character)
    {
      _characterCollection.Add(character);
    }

    public List<Character> GetAllCharacters()
    {
      return _characterCollection;
    }

    public void DeleteCharacter(string name)
    {
      Character characterToRemove = _characterCollection.Find(c => c.Name == name);
      if (characterToRemove != null)
      {
        _characterCollection.Remove(characterToRemove);
      }
    }

    public void SwapCharacters(string name1, string name2)
    {
      Character character1 = _characterCollection.Find(c => c.Name == name1);
      Character character2 = _characterCollection.Find(c => c.Name == name2);

      //We know both characters exist
      int index1 = _characterCollection.IndexOf(character1);
      int index2 = _characterCollection.IndexOf(character2);

      //Swap the positions
      _characterCollection[index1] = character2;
      _characterCollection[index2] = character1;
    }

    public bool CharacterExists(string name)
    {
      return _characterCollection.Any(character => character.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
    }

    public bool HasCharacters()
    {
      return _characterCollection.Count > 0;
    }
  }
}
