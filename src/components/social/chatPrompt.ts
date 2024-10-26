export const getSystemPrompt = (MyContext: string, HerContext: string) => {
  return `下面你将进行一个场景化聊天的剧本,以下是你的信息:${HerContext},以下是对方的信息:${MyContext},
  ,你需要返回一个根据场景和双方信息的对话,下面请你回答对方的问题'`;
};
