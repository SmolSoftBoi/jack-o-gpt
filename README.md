# Jack-O'-Lantern: A Voice-Activated Assistant for Halloween

## Overview

This project is a voice-activated assistant designed to entertain and engage audiences during Halloween. It uses OpenAI's GPT-4 model to generate responses and Eleven Labs' Text-to-Speech API for voice output. The assistant can sing songs, tell jokes, and narrate classic Halloween tales.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Functionality](#functionality)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Installation

1. Clone the repository.
2. Run `yarn install` to install the required packages.

## Usage

1. Set up your environment variables (see below).
2. Run `yarn compile` to compile the application.
3. Run `yarn start` to start the application.

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key.
- `ELEVENLABS_API_KEY`: Your Eleven Labs API key.
- `MAX_RETRIES`: Maximum number of retries for API calls (optional).

## Functionality

- **Voice Capture**: Captures voice input and saves it as an audio file.
- **Transcription**: Transcribes the voice input to text using OpenAI's Whisper model.
- **Assistant Interaction**: Processes the transcribed text and generates a response.
- **Voice Output**: Converts the generated text to voice using Eleven Labs' Text-to-Speech API.
- **Audio Playback**: Plays the generated voice output.

## Error Handling

The application has robust error handling to deal with API failures, missing environment variables, and other issues.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you'd like to add.
