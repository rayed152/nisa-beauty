import React from "react";
import HeaderLinks from "./HeaderLinks"; // Adjust the import path if needed

export const SubHeader = () => {
  const categories = [
    {
      categoryLabel: "Make Up",
      subCategories: [
        { name: "Lipstick", path: "/make-up/lipstick" },
        { name: "Lipstick 2", path: "/make-up/lipstick-2" },
      ],
    },
    {
      categoryLabel: "Skin Care & Bath",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Hair",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Men",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Baby",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Health Care",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Fragrance",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Life Style",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Gift Shop",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },
    {
      categoryLabel: "Brands",
      subCategories: [
        { name: "Moisturizer", path: "/skin-care/moisturizer" },
        { name: "Cleanser", path: "/skin-care/cleanser" },
      ],
    },

    // Add more categories as needed
  ];
  return (
    <div>
      <HeaderLinks categories={categories} />
    </div>
  );
};
