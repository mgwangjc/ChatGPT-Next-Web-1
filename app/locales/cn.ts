 从“../config/client”导入{  getClientConfig  } ； 
 从“../store/config”导入{  SubmitKey  } ； 

常量 isApp = !! 获取客户端配置（）？是应用程序；

常量 cn = {
  WIP : "该功能即将开发中……" ,
  错误：{
    未经授权：isApp
      ？"检测到无效 API Key，请前往[设置](/#/settings)页检查 API Key 是否配置正确。"
      : "访问密码不正确或为空，请前往[登录](/#/auth)页输入正确的访问密码，海豚AI聊天助手是川哥说AI的知识星球会员的增值服务，加微信cgsai99加入星球会员，免费使用。公众号：创时代人工智能，或者在[设置](/#/settings)页面填入您自己的 OpenAI API 密钥。"面填入您自己的 OpenAI API 轴。" ,
       加入星球会员链接：「川哥说AI」https://t.zsxq.com/13KfQMXGN
  } ,} ,
  授权：{{
    标题：“需要密码”，
    温馨提示：“管理员已开启密码验证，请在下方填入访问码”，
    输入: "在此处填写访问码" ,"在此处填写访问码" ,
    确认：“确认”，
    最后：“今晚今晚”，
  } ,} ,
  聊天项目：{{
    ChatItemCount : ( count : number ) => ` ${ count }条对话` ,( count : number ) => ` ${ count }条对话` ,
  } ,
  Chat: 
    字幕：
    编辑消息：
      标题：
      话题：
        标题：
        字幕：
      } ,
    } ,
    行动：
      聊天列表：
      压缩历史记录：
      出口：
      Copy: 
      停止：
      重试：
      别针：
      PinToast内容：
      PinToast动作：
      删除：
      编辑：
    } ,
    命令：
      new：“新建聊天”，
      纽姆：
      下一个：
      prev: 
      清除：
      德尔：
    } ,
    输入动作：
      停止：
      至底部：
      主题：
        汽车：
        光：
        黑暗的：
      } ,
      迅速的：
      面具：
      Clear: "清除聊天",
      Settings: "对话设置",
    },
    Rename: "重命名对话",
    Typing: "正在输入…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} 发送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints + "，/触发补全，:触发命令" ;
    } ,
    Send: 
    Config: 
      Reset: 
      SaveAs: "存为面具",
    },
    IsContext: "预设提示词",
  },
  Export: {
    Title: "分享聊天记录",
    Copy: "全部复制",
    Download: "下载文件",
    Share: "分享到 ShareGPT",
    MessageFromYou: "来自你的消息",
    MessageFromChatGPT: "来自 ChatGPT 的消息",
    Format: {
      Title: "导出格式",
      SubTitle: "可以导出 Markdown 文本或者 PNG 图片",
    },
    IncludeContext: {
      Title: "包含面具上下文",
      SubTitle: "是否在消息中展示面具上下文",
    },
    Steps: {
      Select: "选取",
      Preview: "预览",
    },
    Image: {
      Toast: "正在生成截图",
      Modal: "长按或右键保存图片",
    },
  },
  Select: {
    Search: "搜索消息",
    All: "选取全部",
    Latest: "最近几条",
    Clear: "清除选中",
  },
  Memory: {
    Title: "历史摘要",
    EmptyContent: "对话内容过短，无需总结",
    Send: "自动压缩聊天记录并作为上下文发送",
    Copy: "复制摘要",
    Reset: "[unused]",
    ResetConfirm: "确认清空历史摘要？",
  },
  Home: {
    NewChat: "新的聊天",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除会话",
    Revert: "撤销",
  },
  Settings: {
    Title: "设置",
    SubTitle: "所有设置选项",

    Danger: {
      Reset: {
        Title: "重置所有设置",
        SubTitle: "重置所有设置项回默认值",
        Action: "立即重置",
        Confirm: "确认重置所有设置？",
      },
      Clear: {
        Title: "清除所有数据",
        SubTitle: "清除所有聊天、设置数据",
        Action: "立即清除",
        Confirm: "确认清除所有聊天、设置数据？",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "所有语言",
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },
    InjectSystemPrompts: {
      Title: "注入系统级提示信息",
      SubTitle: "强制给每次请求的消息列表开头添加一个模拟 ChatGPT 的系统提示",
    },
    InputTemplate: {
      Title: "用户输入预处理",
      SubTitle: "用户最新的一条消息会填充到此模板",
    },

    Update: {
      Version: (x: string) => `当前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "检查更新",
      IsChecking: "正在检查更新...",
      FoundUpdate: (x: string) => `发现新版本：${x}`,
      GoToUpdate: "前往更新",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: {
      Title: "预览气泡",
      SubTitle: "在预览气泡中预览 Markdown 内容",
    },
    AutoGenerateTitle: {
      Title: "自动生成标题",
      SubTitle: "根据对话内容生成合适的标题",
    },
    Mask: {
      Splash: {
        Title: "面具启动页",
        SubTitle: "新建聊天时，展示面具启动页",
      },
      Builtin: {
        Title: "隐藏内置面具",
        SubTitle: "在所有面具列表中隐藏内置面具",
      },
    },
    Prompt: {
      Disable: {
        Title: "禁用提示词自动补全",
        SubTitle: "在输入框开头输入 / 即可触发自动补全",
      },
      List: "自定义提示词列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，用户定义 ${custom} 条`,
      Edit: "编辑",
      Modal: {
        Title: "提示词列表",
        Add: "新建",
        Search: "搜索提示词",
      },
      EditModal: {
        Title: "编辑提示词",
      },
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    Token: {
      Title: "API Key",
      SubTitle: "使用自己的 Key 可绕过密码访问限制",
      Placeholder: "OpenAI API Key",
    },

    Usage: {
      Title: "余额查询",
      SubTitle(used: any, total: any) {
        return `本月已使用 $${used}，订阅总额 $${total}`;
      },
      IsChecking: "正在检查…",
      Check: "重新检查",
      NoAccess: "输入 API Key 或访问密码查看余额",
    },
    AccessCode: {
      Title: "访问密码",
      SubTitle: "管理员已开启加密访问",
      Placeholder: "请输入访问密码",
    },
    Endpoint: {
      Title: 
      SubTitle: 
    } ,
    CustomModel: 
      Title: 
      SubTitle: 
    } ,
    Model: 
    Temperature: 
      Title: 
      SubTitle: 
    } ,
    TopP: {
      Title: "核采样 (top_p)",
      SubTitle: "与随机性类似，但不要和随机性一起更改",
    },
    MaxTokens: {
      Title: "单次回复限制 (max_tokens)",
      SubTitle: "单次交互所用的最大 Token 数",
    },
    PresencePenalty: {
      Title: "话题新鲜度 (presence_penalty)",
      SubTitle: "值越大，越有可能扩展到新话题",
    },
    FrequencyPenalty: {
      Title: "频率惩罚度 (frequency_penalty)",
      SubTitle: "值越大，越有可能降低重复字词",
    },
  },
  商店：{
    默认主题：“新的聊天”，
    BotHello：“尊敬的川哥说AI星球会员，我是海豚AI工作助手，有什么可以帮助您的吗” ,
    Error: "出错了，稍后重试吧" ,
    提示：{
      History: ( content : string ) => "这是历史聊天总结作为前情提要：" + content,
      话题：
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要浪费文本，如果没有主题，请直接返回“闲聊”" ,
      总结：
        “简要总结一下对话内容，首先进行后续的上下文提示，控制在200字以内”，
    } ,
  } ,
  复制：{
    成功：“已读取测量板”，
    失败：“复制失败，请授予剪切板权限”，
  } ,
  上下文：{
    Toast: (x: any) => `包含 ${x} 条预设提示词`,
    Edit: "当前对话设置",
    Add: "新增一条对话",
    Clear: "上下文已清除",
    Revert: "恢复上下文",
  },
  Plugin: {
    Name: "插件",
  },
  Mask: {
    Name: "面具",
    Page: {
      Title: "预设角色面具",
      SubTitle: ( count : number ) => ` ${ count }个预设角色定义` ,
      搜索: "搜索角色面具" ,
      创建：“新建”，
    } ,
    项目：{
      Info: ( count : number ) => `包含${ count }条预设对话` ,
      聊天：“对话”，
      查看：“查看”，
      编辑：“编辑”，
      删除：“删除”，
      DeleteConfirm: "确认删除？" ,
    } ,
    编辑模式：{
      标题：（只读：布尔值） =>
        `编辑默认面膜${只读？"（庸）" : "" } ` ,
      下载：“下载默认值”，
      克隆：“克隆基线”，
    } ,
    配置：{
      头像: "角色头像" ,
      名称: "角色名称" ,
      同步：{
        标题：“使用全局设置”，
        SubTitle: "当前对话是否使用全局模型设置" ,
        确认: "当前对话的自定义设置将被自动覆盖，确认实现全局设置？" ,
      } ,
      隐藏上下文：{
        标题：“隐藏预设对话”，
        副标题：“隐藏后预设对话不会出现在聊天界面”，
      } ,
      分享：{
        标题：“分享此面具”，
        副标题：“生成此面具的直达链接”，
        Action: "复制链接" ,
      } ,
    } ,
  } ,
  新聊天：{
    返回："返回" ,
    跳过：“直接开始”，
    NotShow: "不再展示" ,
    ConfirmNoShow: "确认取消？取消后可以随时在设置中重新启用。" ,
    标题：《创作一个面具》，
    副标题：“现在开始，与面具背后的灵魂思维碰撞”，
    More: "查看全部",
  },

  URLCommand: {
    Code: "检测到链接中已经包含访问码，是否自动填入？",
    Settings: "检测到链接中包含了预制设置，是否自动填入？",
  },

  UI: {
    Confirm: "确认",
    Cancel: "取消",
    Close: "关闭",
    Create: "新建",
    Edit: "编辑",
  },
  Exporter: {
    Model: "模型",
    Messages: "消息",
    Topic: "主题",
    Time: "时间",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
