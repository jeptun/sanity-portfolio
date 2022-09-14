// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "openSource", title: "Open Source" },
          { value: "dokumentace", title: "Dokumentace" },
          { value: "demo", title: "Demo" },
          { value: "clanek", title: "Článek" },
          { value: "zdroj", title: "Zdroj" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "logoLink",
      title: "Logo link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
