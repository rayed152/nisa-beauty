import { db } from "@/lib/db";
import { User } from "@prisma/client";

export async function createUser(data: User) {
  try {
    const user = await db.user.create({ data });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getUserById({
  id,
  clerkUserId,
}: {
  id?: string;
  clerkUserId?: string;
}) {
  try {
    if (!id && !clerkUserId) {
      throw new Error("id or clerkUserId is required");
    }

    const query = id ? { id } : { clerkUserId };

    const user = await db.user.findUnique({ where: query });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function updateUser(clerkUserId: string, data: Partial<User>) {
  try {
    // Check if the user exists before updating
    const existingUser = await db.user.findUnique({
      where: { clerkUserId },
    });
    if (!existingUser) {
      console.error(`User with id ${clerkUserId} not found`);
      return { error: "User not found" };
    }

    const user = await db.user.update({
      where: { clerkUserId },
      data,
    });
    return { user };
  } catch (error) {
    console.error("Error updating user:", error);
    return { error };
  }
}

export async function deleteUser(clerkUserId: string) {
  try {
    const user = await db.user.delete({
      where: { clerkUserId },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
