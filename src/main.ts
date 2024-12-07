import * as core from '@actions/core';
import * as github from '@actions/github';

export async function run() {
    try {
        const name: string = core.getInput('name');
        core.info(`Hello, ${name}!`);
    } catch (err) {
        if (err instanceof Error) {
            core.setFailed(err.message);
        }
    }
}

if (require.main === module) {
    // Execute the function if the file is run directly
    run();
}

