// 获取画布和上下文
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = 800;
canvas.height = 600;

// 方块大小
const blockSize = 20;

// 世界地图
const world = [];
for (let y = 0; y < canvas.height / blockSize; y++) {
    world[y] = [];
    for (let x = 0; x < canvas.width / blockSize; x++) {
        world[y][x] = 0; // 0 表示空方块
    }
}

// 玩家位置
let playerX = Math.floor(canvas.width / blockSize / 2);
let playerY = Math.floor(canvas.height / blockSize / 2);

// 绘制世界
function drawWorld() {
    for (let y = 0; y < world.length; y++) {
        for (let x = 0; x < world[y].length; x++) {
            if (world[y][x] === 1) {
                ctx.fillStyle = '#8B4513'; // 棕色方块
                ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
            }
        }
    }
}

// 绘制玩家
function drawPlayer() {
    ctx.fillStyle = '#FF0000'; // 红色玩家
    ctx.fillRect(playerX * blockSize, playerY * blockSize, blockSize, blockSize);
}

// 主渲染循环
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWorld();
    drawPlayer();
    requestAnimationFrame(render);
}

// 处理键盘事件
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
            if (playerY > 0) playerY--;
            break;
        case 'ArrowDown':
            if (playerY < canvas.height / blockSize - 1) playerY++;
            break;
        case 'ArrowLeft':
            if (playerX > 0) playerX--;
            break;
        case 'ArrowRight':
            if (playerX < canvas.width / blockSize - 1) playerX++;
            break;
        case ' ': // 空格键放置方块
            world[playerY][playerX] = 1;
            break;
    }
});

// 开始渲染
render();
