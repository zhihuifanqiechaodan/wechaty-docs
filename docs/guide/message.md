# 消息

本节给出了消息类、它的方法及其用途的清晰描述。所有微信消息将被封装为`Message`。

## Message

> 重要说明，这里 Message 类实际上就是在 bot.on('message', message => {})事件函数中返回的回调参数，这个类提供了很多实例方法。

### 实例方法

| 实例方法                     | 返回 类型           |
| ---------------------------- | ------------------- |
| from() and talker()          | `Contact` or `null` |
| to()                         | `Contact` or `null` |
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
