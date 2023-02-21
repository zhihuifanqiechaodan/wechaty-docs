# 环境

> wechaty 1.x 需要 Node.js v16 或更高版本 (推荐 v16.13.0 本人版本)。你可以使用 n，nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

## Wechaty

### 示例

::: warning
如果使用的是 workPro pouppet 启动命令请添加 WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_CLIENT=true
:::

```js
import { WechatyBuilder, ScanStatus } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";

const bot = WechatyBuilder.build({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot
  .on("scan", (qrcode, status) => {
    // 当机器人需要向你展示二维码进行扫描时，会发出扫描事件。
    // 建议安装qrcode-terminal(运行' npm install qrcode-terminal ')，以便在终端中显示qrcode。
    if (status === ScanStatus.Waiting) {
      qrcodeTerminal.generate(qrcode, {
        small: true,
      });
    }
  })
  .on("login", (user) => {
    // 机器人登录完全成功后，将发出事件登录，并显示当前登录用户的联系人。
    console.log(user);
  })
  .on("logout", (user) => {
    // 当bot检测到注销时，将发出注销，并显示当前登录用户的联系人。
    console.log(user); // 同login
  })
  .on("ready", () => {
    // 当所有数据加载完成时发出，在微信-木偶-padchat中，这意味着它已经完成同步联系人和房间
    // 通常在这个事件回调中 去同步更新缓存数据中的联系人列表和群聊列表
  })
  .on("message", (message) => {
    // 当有新消息时触发
    console.log(message);
  })
  .on("room-invite", (roomInvitation) => {
    // 当有房间邀请时发出
    console.log(roomInvitation);
  })
  .on("room-topic", (room, topic, oldTopic, changer) => {
    // 当有人改变群聊名称时触发
    console.log(room, topic, oldTopic, changer);
  })
  .on("room-join", (room, inviteeList, inviter) => {
    // 当任何人加入任何房间时触发。
    console.log(room, inviteeList, inviter);
  })
  .on("room-leave", (room, leaverList, remover) => {
    // 当有人离开房间时发出
    // 如果有人独自离开房间，微信不会注意到房间里的其他人，所以机器人永远不会得到“离开”事件。
    console.log(room, leaverList, remover);
  })
  .on("friendship", (friendship) => {
    // 当有人向你发送好友请求时，会触发微信友谊事件
    console.log(friendship);
  })
  .on("heartbeat", () => {
    // 获取机器人的心跳
    // 将在微信启动后定期发出。如果没有，则意味着微信已经死亡。
  })
  .on("error", (error) => {
    // 将在发生错误时被触发。
    // 当机器人出现错误时，会触发微信错误事件。
    console.log(error);
  })
  .on("post", () => {
    // 不太知道是干嘛用的
  })
  .on("puppet", () => {
    // 将在木偶被设置时触发，不太知道是干嘛用的
  })
  .on("dong", () => {
    // 应该在调用微信。ding()后释放，不太知道是干嘛用的
  })
  .start()
  .then(() => log.info("StarterBot", "Starter Bot Started."))
  .catch((e) => log.error("StarterBot", e));

// 额外调用的一些方法
// bot.start(); // 启动
// bot.stop(); // 停止
// bot.logout(); // 退出
// bot.logonoff(); // 获取登录/注销状态
// bot.userSelf(); // 获取当前用户
// bot.say(); // 发送消息给userSelf，换句话说，bot发送消息给自己。
// bot.instance(); // 获取微信的全局实例
```

::: tip
欢迎补充和修正内容
:::
