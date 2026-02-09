import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryTag",
  title: "Gallery Tag",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
});
