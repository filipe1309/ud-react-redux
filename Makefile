.SECONDEXPANSION:

.PHONY: run

# Example: make run section=03
run:
	@app_folder=$$(find section-$(section)/* -maxdepth 0 -type d;); \
	echo "App->$$app_folder"; \
	if [ $(section) -eq 7 ] || [ $(section) -eq 8 ] || [ $(section) -eq 9 ]; then \
		cd $$app_folder && npm run server & \
	fi; \
	cd $$app_folder && npm run start
	

