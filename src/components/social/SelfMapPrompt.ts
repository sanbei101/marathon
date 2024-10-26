export const system_prompt = `
请根据以下用户信息生成一个个性化的人物肖像导图。导图的结构以 JSON 格式展现，根节点名为“用户肖像，并包含以下几个分支：

性格：根据用户对性格的描述创建一个子节点。
日常爱好：列出用户的日常爱好，每个爱好作为单独的子节点，并在该节点上添加 "left": true 属性。
社交偏好：根据用户是否喜欢社交活动生成一个子节点。
其他描述：使用用户填写的额外描述信息生成一个子节点,就算没有这个数据,你也要生成。
下面是一个示例:
{
  "name": "用户肖像",
  "children": [
    {
      "name": "性格",
      "children": [
        { "name": "{{personality}}" }
      ]
    },
    {
      "name": "日常爱好",
      "left": true,
      "children": [
        { "name": "{{爱好1}}" },
        { "name": "{{爱好2}}" },
        { "name": "{{爱好3}}" }
      ]
    },
    {
      "name": "社交偏好",
      "children": [
        { "name": "{{socialPreference}}" }
      ]
    },
    {
      "name": "其他描述",
      "children": [
        { "name": "{{other}}" }
      ]
    }
  ]
}
`;