// 獲取網址中的查詢參數值
const urlParams = new URLSearchParams(window.location.search);
const runJS = urlParams.get('runJS');

// 檢查參數值並執行 JavaScript
if (runJS === 'true') {
  // 在這裡插入你的 JavaScript 代碼
  var pages = [
    //"homepage.html",
    //"up_stairs.html",
    //"down_stairs.html",
    //"./puzzleGames/puzzleWithUpAd-main/index.html",
    "./puzzleGames/html/down_puzzles.html", // 地端
    "https://yesfish1010.github.io/puzzleWithUpAd/", // 上；拼圖
    "https://brian591757.github.io/",
    //"https://github.com/Teresa-Guo/Donwstairs"
  ];
  
  // 生成亂數索引
  var randomIndex = Math.floor(Math.random() * pages.length);
  
  // 獲取隨機頁面的 URL
  var randomPage = pages[randomIndex];
  
  // 跳轉到隨機頁面
  window.location.search = randomPage;
}
