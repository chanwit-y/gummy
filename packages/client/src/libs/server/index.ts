import { eq } from "drizzle-orm";

import { db } from "./db";
import { usersTable } from "./db/schema";

export const geUser = async (email: string) => {
	const existingUser = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email))
        .get();	

	return existingUser;
}