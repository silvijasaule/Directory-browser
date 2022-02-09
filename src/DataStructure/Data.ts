export interface FileNode {
  id: string
  children?: FileNode[]
}

export const root: FileNode = {
  id: "Documents", //Documents
  children: [{ 
    id: "Work", //Folder 1
    children: [
      {
        id: "Zoom" //Subfolder 1A
      },
      {
        id: "Visual Studio Code", //Subfolder 1B
        children: [
        {
          id: "Extentions" //Subfolder 1B-1
        }
        ]
      },
    ]
  },
  {
    id: "Studies", //Folder 2
    children: [{
      id: "Sourcery Academy" //Subfolder 2A
    },
    {
      id: "Baltic Institute of Technology" //Subfolder 2B
    },
    {
      id: "Udemy" //Subfolder 2C
    }]
  },
  {
    id: "Personal" //Folder 3
  },
]
  
}
