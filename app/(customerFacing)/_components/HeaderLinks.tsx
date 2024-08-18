"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter } from "next/navigation";

interface Category {
  categoryLabel: string;
  subCategories: { name: string; path: string }[];
}

const HeaderLinks = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };
  return (
    <Menubar className="flex justify-between bg-gradient-to-r from-[#678A46] to-white border-none ">
      {categories.map(({ categoryLabel, subCategories }) => (
        <MenubarMenu key={categoryLabel}>
          <MenubarTrigger className="flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
            {categoryLabel}
          </MenubarTrigger>
          <MenubarContent>
            {subCategories.map(({ name, path }) => (
              <MenubarItem key={name} onClick={() => handleItemClick(path)}>
                {name}
              </MenubarItem>
            ))}
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default HeaderLinks;
