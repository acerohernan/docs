migration-gen: 
	npx typeorm-ts-node-esm -d ./src/typeorm/data-source.ts migration:generate ./src/typeorm/migrations/$(name)

migration-run: 
	npx typeorm-ts-node-esm migration:run -d ./src/typeorm/data-source.ts