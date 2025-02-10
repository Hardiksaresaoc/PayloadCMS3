import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'typescript',
      options: [
        {
          "label": "C",
          "value": "c"
        },
        {
          "label": "C#",
          "value": "csharp"
        },
        {
          "label": "C++",
          "value": "cpp"
        },
        {
          "label": "CSS",
          "value": "css"
        },
        {
          "label": "Dart",
          "value": "dart"
        },
        {
          "label": "Go",
          "value": "go"
        },
        {
          "label": "HTML",
          "value": "html"
        },
        {
          "label": "Java",
          "value": "java"
        },
        {
          "label": "JavaScript",
          "value": "javascript"
        },
        {
          "label": "Kotlin",
          "value": "kotlin"
        },
        {
          "label": "Lua",
          "value": "lua"
        },
        {
          "label": "Objective-C",
          "value": "objective-c"
        },
        {
          "label": "Perl",
          "value": "perl"
        },
        {
          "label": "PHP",
          "value": "php"
        },
        {
          "label": "Python",
          "value": "python"
        },
        {
          "label": "R",
          "value": "r"
        },
        {
          "label": "Ruby",
          "value": "ruby"
        },
        {
          "label": "Rust",
          "value": "rust"
        },
        {
          "label": "Scala",
          "value": "scala"
        },
        {
          "label": "Shell",
          "value": "shell"
        },
        {
          "label": "Swift",
          "value": "swift"
        },
        {
          "label": "TypeScript",
          "value": "typescript"
        },
        {
          "label": "Visual Basic",
          "value": "visual-basic"
        }
      ]
      
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
