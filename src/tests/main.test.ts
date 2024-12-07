import { run } from '../main';
import * as core from '@actions/core';

jest.mock('@actions/core');

describe('run function', () => {
    it('runs successfully', async () => {
        // Mock environment variables and core functions
        process.env.INPUT_NAME = 'GitHub';
        jest.spyOn(core, 'getInput').mockReturnValue('GitHub');
        const infoMock = jest.spyOn(core, 'info').mockImplementation();

        // Execute the run function
        await run();

        // Validate that core.info was called with the correct output
        expect(infoMock).toHaveBeenCalledWith('Hello, GitHub!');
    });
});
