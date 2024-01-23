geticonds:
	wget -qO - "https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2" > src/assets/icons.woff2;

prepareDebian:
	sudo apt install libnss3 libatk-bridge2.0-0 libxkbcommon0 libasound2;

