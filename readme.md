## Fabric-Tools

### Usage

#### filterContentByType
Filter content of a document by specified type(s).
```
filterContentByType(
  {
    "type": "doc",
    "version": 1,
    "content": [
      {
        "blockquote",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Hello"
              }
            ]
          }
        ]
      },
      {
        "type": "paragraph",
        "content": {
          "type": "text",
          "text": "World"
        }
      }
    ]
  }
, 'paragraph', 'text');
/* 
 Output:
  [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Hello"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "World"
        }
      ]
    }
  ]
*/
```
