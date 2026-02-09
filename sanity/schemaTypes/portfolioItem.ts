import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "galleryTag" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
    }),
    defineField({
      name: "size",
      title: "Card Size",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "" },
          { title: "Tall", value: "tall" },
          { title: "Wide", value: "wide" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
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
