.SECONDEXPANSION:

.PHONY: run

run:
	@app_folder=$$(find section-$(section)/* -maxdepth 0 -type d;); \
	echo "App->$$app_folder"; \
	cd $$app_folder && npm run start

