import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteInfo",
  title: "Site Info",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Studio Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "handle",
      title: "Social Handle",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "tagline",
      title: "Hero Tagline",
      type: "text",
      rows: 2,
    }),
  ],
});
