# 事件监听

```ts
graph.on(eventName, evt => {
  // 一些操作
})
```
其中，事件对象 `evt` 的属性值有：
- pixi返回的事件属性
- `point`: 缩放后的世界坐标
- `_data_`: 节点的原始数据
- `shape` : 对应pixi节点的container对象


## 事件名
| 事件名              | 说明         |
|------------------|------------|
| canvas:click     | canvas单击事件 |
| canvas:dbclick   | canvas双击事件 |
| canvas:mousemove | canvas双击事件 |
| canvas:mouseup   | canvas双击事件 |
| node:click       | 节点点击事件     |
| node:mouseenter  | 节点鼠标第一次进入  |
| node:mousemove   | 节点鼠标移动     |
| node:mouseout    | 节点鼠标移出     |
| node:mouseup     | 节点鼠标放开     |
| node:dragstart   | 节点开始拖动     |
| node:drag        | 节点拖动中      |
| node:dragend     | 节点拖动完成     |
| link:click       | 边点击事件      |
| link:mouseenter  | 边鼠标第一次进入   |
| link:mousemove   | 边鼠标移入      |
| link:mouseout    | 边鼠标移出      |
| link:mouseup     | 边鼠标放开      |