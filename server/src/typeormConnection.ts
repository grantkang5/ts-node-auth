import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

export const typeormConnection = async () => {
	let retries = 5
	while (retries) {
		try {			
			const connections = createConnection()

			return connections
		} catch (err) {
			console.log(err)
			retries -= 1;
			console.log(`retries left: ${retries}`)
			await new Promise(res => setTimeout(res, 5000))
		}
	}

	return null;
}
