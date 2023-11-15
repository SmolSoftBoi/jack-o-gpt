import { main, captureVoiceInput, transcribeVoiceToText, interactWithAssistant, convertTextToVoice, playAudioOutput, handleError } from './index';

jest.mock('./index');

describe('main function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should run without errors', async () => {
    (captureVoiceInput as jest.Mock).mockResolvedValue('voiceData');
    (transcribeVoiceToText as jest.Mock).mockResolvedValue('text');
    (interactWithAssistant as jest.Mock).mockResolvedValue('processedText');
    (convertTextToVoice as jest.Mock).mockResolvedValue('voiceOutput');
    
    await main();

    expect(captureVoiceInput).toHaveBeenCalled();
    expect(transcribeVoiceToText).toHaveBeenCalledWith('voiceData');
    expect(interactWithAssistant).toHaveBeenCalledWith('text');
    expect(convertTextToVoice).toHaveBeenCalledWith('processedText');
    expect(playAudioOutput).toHaveBeenCalledWith('output.mp3', 'voiceOutput');
  });

  it('should handle errors', async () => {
    const error = new Error('Test error');
    (captureVoiceInput as jest.Mock).mockRejectedValue(error);

    await main();

    expect(handleError).toHaveBeenCalledWith(error);
  });
});