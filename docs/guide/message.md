# 消息

本节给出了消息类、它的方法及其用途的清晰描述。所有微信消息将被封装为`Message`。

## Message

> 重要说明，这里 Message 类实际上就是在 bot.on('message', message => {})事件函数中返回的回调参数，这个类提供了很多实例方法。

### 实例方法

| 实例方法                     | 返回类型            |
| ---------------------------- | ------------------- |
| talker() `to replace` from() | `Contact` or `null` |
| listener()`to replace`to()   | `Contact` or `null` |
| room()                       | `Room` or `null`    |
| text()                       | `string`            |
| say(text Or Contact Or File) | `Promise`           |
| type()                       | `MessageType`       |
| self()                       | `boolean`           |
| mention()                    | `Promise`           |
| mentionSelf()                | `Promise`           |
| forward(to)                  | `Promise`           |
| date()                       | `Date`              |
| age()                        | `Number`            |
| toFileBox()                  | `Promise`           |
| toContact()                  | `Promise`           |
| toUrlLink()                  | `Promise`           |

### 静态方法

| 静态方法  | 返回类型  |
| --------- | --------- |
| find()    | `Promise` |
| findAll() | `Promise` |

### 返回类型

#### Contact

```js
// padlocal puppet
  contact WechatifiedContactImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  id: 'wxid_jolno28jvi3822',
  payload: {
    alias: '',
    avatar: 'https://wx.qlogo.cn/mmhead/ver_1/emkGPia8wFSR7RhQbicZMSKxibFZfgmOCibmuyyH0BaPhSjZxtTEIkoDjjdWlhEeNe6QdTxgzSAIJQZQCWo5ffuyeiawbekGNUlwLTH15I67TUHY/0',
    city: '',
    friend: false,
    gender: 0,
    id: 'wxid_jolno28jvi3822',
    name: 'wang',
    phone: [],
    province: '',
    signature: '',
    type: 1,
    weixin: ''
  },
  [Symbol(kCapture)]: false
}

// workPro puppet
  WechatifiedContactImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  id: '7881302689943729',
  payload: {
    address: '',
    alias: 'admin',
    avatar: 'http://wx.qlogo.cn/mmhead/OVExThfzrxicfAFAegxmK1X4NWYicAYrpsuMWl34haXAo/0',
    city: '',
    corporation: '',
    coworker: false,
    description: '',
    friend: true,
    gender: 1,
    handle: 'wmTyuvCgAAdHyuwerH1p5wi6Wa4iU5BA',
    id: '7881302689943729',
    name: '只会番茄炒蛋',
    phone: [],
    province: '',
    signature: '',
    star: false,
    title: 'wmTyuvCgAAdHyuwerH1p5wi6Wa4iU5BA',
    type: 1,
    weixin: 'wmTyuvCgAAdHyuwerH1p5wi6Wa4iU5BA'
  },
  [Symbol(kCapture)]: false
}
```

#### Room

```js
// padlocal puppet
WechatifiedRoomImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  id: '25392920397@chatroom',
  payload: {
    adminIdList: [],
    avatar: 'https://wx.qlogo.cn/mmcrhead/89MgL2VKV4ctTnTCpViaalRicEXYopqjpRXeMXn9aXibYmVDdZ2uLkE5ia2RLGguBwUhwElfxqXmTB5Nyfsepc38PFP4KZftm1Uz/0',
    id: '25392920397@chatroom',
    memberIdList: [
      'wxid_6ewbcbl5wi8112',
      'wxid_6223002249912',
      '25984984842875905@openim',
      'wxid_9kuf8fdsn2il22'
    ],
    ownerId: '25984984842875905@openim',
    topic: ''
  },
  [Symbol(kCapture)]: false
}

// workPro puppet
WechatifiedRoomImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  id: 'R:10754717511972878',
  payload: {
    adminIdList: [],
    avatar: 'https://wework.qpic.cn/wwpic/15554_QltZ0b6JSrqkS_e_1649764172/0',
    handle: 'wrTyuvCgAAD3vzH5dc70ydunTKf1ORmA',
    id: 'R:10754717511972878',
    memberIdList: [
      '1688851979087841',
      '7881301374163481',
      '7881301901016846',
      '7881302689943729'
    ],
    ownerId: '1688851979087841',
    topic: ''
  },
  [Symbol(kCapture)]: false
}


```

#### MessageType

```js
MessageType {
  Unknown = 0,
  Attachment  = 1,    // Attach(6),
  Audio       = 2,    // Audio(1), Voice(34)
  Contact     = 3,    // ShareCard(42)
  ChatHistory = 4,    // ChatHistory(19)
  Emoticon    = 5,    // Sticker: Emoticon(15), Emoticon(47)
  Image       = 6,    // Img(2), Image(3)
  Text        = 7,    // Text(1)
  Location    = 8,    // Location(48)
  MiniProgram = 9,    // MiniProgram(33)
  GroupNote   = 10,   // GroupNote(53)
  Transfer    = 11,   // Transfers(2000)
  RedEnvelope = 12,   // RedEnvelopes(2001)
  Recalled    = 13,   // Recalled(10002)
  Url         = 14,   // Url(5)
  Video       = 15,   // Video(4), Video(43)
  Post        = 16,   // Moment, Channel, Tweet, etc
}
```

#### UrlLink

```js
// padlocal puppet
WechatifiedUrlLinkImpl {
  payload: {
    description: 'vue3-admin-template 是一个后台前端解决方案，它基于 vue 和 element-plus实现，它使用了最新的前端技术栈，内置了动态路由，权限验证，提供了多种布局方式。',
    thumbnailUrl: '',
    title: 'vue3高级指南-基于vue3-admin-template开发vue3管理后台 - 掘金',
    url: 'https://juejin.cn/post/7158671341086834724'
  }
}

// workPro puppet
WechatifiedUrlLinkImpl {
  payload: {
    title: 'vue3高级指南-基于vue3-admin-template开发vue3管理后台 - 掘金',
    url: 'https://juejin.cn/post/7158671341086834724',
    description: 'vue3-admin-template 是一个后台前端解决方案，它基于 vue 和 element-plus实现，它使用了最新的前端技术栈，内置了动态路由，权限验证，提供了多种布局方式。',
    thumbnailUrl: 'https://workpro.s3.cn-northwest-1.amazonaws.com.cn/link_msg/ed978e61-5219-4521-9f42-9e1f0c1cba10/cd6127d4-1d9a-48e0-8255-2ef3236c9bd9.jpg'
  }
}
```

## 实例方法

### message

> bot.on('message', message => {}) 中的 message

```js
// padlocal puppet
WechatifiedMessageImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  id: '8417809176300146551',
  payload: {
    id: '8417809176300146551',
    talkerId: 'wxid_6emwvnqa600412',
    text: '你在写很特别的东西',
    timestamp: 1676880215,
    type: 7,
    roomId: '25578000953@chatroom',
    mentionIdList: []
  },
  [Symbol(kCapture)]: false
}

// workPro puppet
WechatifiedMessageImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  id: '1065410',
  payload: {
    filename: '',
    id: '1065410',
    listenerId: '',
    mentionIdList: [],
    roomId: 'R:10754717511972878',
    talkerId: '7881302689943729',
    text: '123',
    timestamp: 1676879980410,
    type: 7
  },
  [Symbol(kCapture)]: false
}
```

### `message.talker()` to replace `message.from()` ⇒ Contact | null

> 通过此方法，可以从消息中获取发送消息人的详情信息，如果没有找到返回 null

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  const contact = message.talker();
});
```

### `message.listener()` to replace `message.to()` ⇒ Contact | null

> 如果该条消息是从群聊房间中发出，那么将返回一个 null, 否则返回 Contact，一般可以用来区分消息发送的来源

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  const is_room_message = message.listener();
});
```

### message.room() ⇒ Room | null

> 通过该方法可以获取群聊的信息，如果返回 null 说明该消息不是在群聊中发送的，也可以用来区分消息来源

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  const room = message.room();
});
```

### message.text() => string

> 此方法返回文本消息内容， 通常对于消息的处理可以根据返回的消息类型来做出对应消息的数据处理等

```js
import { WechatyBuilder, types } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  if (types.Message.Text === message.payload.type) {
    const text = message.text();
  }
});
```

### message.toRecalled() ⇒ Promise <Message | null>

> 改方法用于获取撤回的消息内容

```js
import { WechatyBuilder, types } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  if (types.Message.Recalled === message.payload.type) {
    const recalledMessage = await message.toRecalled()
  }
});
```

### message.say(textOrContactOrFileOrUrlLinkOrMiniProgramOrLocation) ⇒ Promise

> 通过该方法，你可以回复消息内容，目前支持 6 种消息类型, 此功能是基于你使用的 puppet 实现的，参考 [puppet 功能对比](/guide/puppet.md)

```js
import { WechatyBuilder } from "wechaty";
import { FileBox } from "file-box";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", async (message) => {
  // 通常不建议直接发送消息回复，最好封装一个工具类， 引入消息队列发送消息，防止频繁发送消息被风控
  // 通过识别文字关键字回复消息
  const text = message.text();

  // 发送图片
  if (/^ding$/i.test(text)) {
    const fileBox = FileBox.fromUrl(messageInfo.fromUrl);
    await message.say(fileBox);
  }

  // 发送文字
  if (/^dong$/i.test(text)) {
    await message.say("只会番茄炒蛋");
  }

  // 发送个人名牌
  if (/^只会番茄炒蛋$/i.test(text)) {
    await message.say("只会番茄炒蛋");
    const contactCard = await bot.Contact.find({ name: "只会番茄炒蛋" });
    contactCard && (await message.say(contactCard));
  }

  // 发送 url链接
  if (/^link$/i.test(text)) {
    // 目前 UrlLink 这个类在1.x版本没有找到如何导入，后续找到后更新
    const urlLink = new UrlLink({
      description:
        "Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.",
      thumbnailUrl:
        "https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67",
      title: "Wechaty",
      url: "https://github.com/wechaty/wechaty",
    });

    await message.say(urlLink);
  }

  // 发送小程序
  if (/^miniProgram$/i.test(text)) {
    // 目前 MiniProgram 这个类在1.x版本没有找到如何导入，后续找到后更新
    const miniProgramPayload = new MiniProgram({
      username: "gh_xxxxxxx", //get from mp.weixin.qq.com
      appid: "", //optional, get from mp.weixin.qq.com
      title: "", //optional
      pagepath: "", //optional
      description: "", //optional
      thumbnailurl: "", //optional
    });
    await message.say(miniProgramPayload);
  }

  // 发送位置
  if (/^location$/i.test(text)) {
    // 目前 Location 这个类在1.x版本没有找到如何导入，后续找到后更新
    const location = new Location({
      accuracy: 15,
      address: "北京市北京市海淀区45 Chengfu Rd",
      latitude: 39.995120999999997,
      longitude: 116.334154,
      name: "东升乡人民政府(海淀区成府路45号)",
    });
    await message.say(location);
  }
});
```

### message.type() ⇒ MessageType

> 此方法获取微信消息的类型

```js
import { WechatyBuilder, types } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  // 两种判断消息类型的方式
  if (
    types.Message.Text === message.type() ||
    types.Message.Text === message.payload.type
  ) {
    console.log("This is a text message");
  }
});
```

### message.self() ⇒ boolean

> 此方法返回当前消息是否是自己发送

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  if (message.self()) {
    console.log("this message is sent by myself!");
  }
});
```

### message.mention() ⇒ Promise <Contact []>

> 改方法返回当前群聊消息内@的成员列表，当然你也可以根据列表中成员的 id 和当前微信 id 做比对，判断是否有@自己

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", async (message) => {
  const contactList = await message.mention();
});
```

### message.mentionSelf() ⇒ Promise

> 该方法用于判断是否@自己，返回 boolean 类型

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", async (message) => {
  if (await message.mentionSelf()) {
    console.log(
      "this message were mentioned me! [You were mentioned] tip ([有人@我]的提示)"
    );
  }
});
```

### message.forward(to) ⇒ Promise

> 改方法用于转发消息内容，你可以将当前消息转发到其他群聊或个人

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", async (message) => {
  const room = await bot.Room.find({ topic: "wechaty" });
  const contact = await bot.Contact.find({ name: "只会番茄炒蛋" });
  room && (await message.forward(room));
  contact && (await message.forward(contact));
});
```

### message.date() ⇒ Date

> 该方法返回消息发送的时间

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  console.log(message.date()); // 2022-01-28T06:09:22.000Z
});
```

### message.age() ⇒ number

> 此方法返回消息接收的时长，即当有人发送消息到机器人接收到消息之前的间隔，单位（seconds）

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  console.log(message.age()); // 1
});
```

### message.toFileBox() ⇒ Promise

> 此方法从消息中提取媒体文件，并将其放入 FileBox 中。

```js
import { WechatyBuilder } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  const image = await message.toFileBox()
	// 转流媒体操作
	const imageStream = await image.toStream();
  // 将媒体流上传到存储空间，返回url存储等等操作
});
```

### message.toContact() ⇒ Promise

> 此方法用于消息中发送的个人名片信息

```js
import { WechatyBuilder, types } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  if (types.Message.Contact === message.type()) {
    const contact = await message.toContact()
  }
});
```

### message.toUrlLink() ⇒ Promise

> 该方法从消息中提取 Url 链接，并将其封装到 UrlLink 类中，此功能是基于你使用的 puppet 实现的，参考 [puppet 功能对比](/guide/puppet.md)

```js
import { WechatyBuilder, types } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});

bot.on("message", (message) => {
  if (types.Message.Contact === message.type()) {
    const urlLink = message.toUrlLink();
  }
});
```

## 静态方法

### Message.find() ⇒ Promise <Message | null>

> 通过该静态方法，你可以查询缓存中的消息

```js
import { WechatyBuilder, types } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});
// 没怎么用明白，也没用过，有用的明白的欢迎issues
console.log(bot.Message.find("聊天内容"));
```

### Message.findAll() ⇒ Promise <Message | null>

> 通过该静态方法，你可以查询缓存中的消息

```js
import { WechatyBuilder, types } from "wechaty";

const bot = new WechatyBuilder({
  name: "ding-dong-bot",
  puppet: process.env.WECHATY_PUPPET,
  puppetOptions: {
    token: process.env.WECHATY_TOKEN,
  },
});
// 没怎么用明白，也没用过，有用的明白的欢迎issues
console.log(bot.Message.findAll("聊天内容"));
```

::: tip
欢迎补充和修正内容
:::
