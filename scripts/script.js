/* 
Student Name: Darwin Cleveland
File Name: contact.html
Date: 11/25/2023
*/

// Sample game data (replace with your actual game data)
const games = [
    { name: "Game 1", category: "Popular Games" },
    { name: "Game 2", category: "Sport Games" },
    { name: "Game 3", category: "Action Games" },
    { name: "Game 4", category: "Kid Games"}
    // Add more game data as needed
  ];

  // Function to display games
  function displayGames() {
    const gameList = document.getElementById('gameList');

    games.forEach(game => {
      const listItem = document.createElement('li');
      listItem.textContent = `${game.name} - Category: ${game.category}`;
      gameList.appendChild(listItem);
    });
  }

  // Call the function to display games when the page loads
  window.onload = displayGames;

function submitGameRatings() {
    /* Get the values from the input fields*/
    const game1Rating = document.getElementById('game1rating').value;
    const game2Rating = document.getElementById('game2rating').value;
}  