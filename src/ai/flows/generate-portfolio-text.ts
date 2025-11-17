'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating tailored portfolio texts or skill sets based on a given audience profile.
 *
 * - generatePortfolioText - The function to generate the tailored portfolio text.
 * - GeneratePortfolioTextInput - The input type for the generatePortfolioText function.
 * - GeneratePortfolioTextOutput - The output type for the generatePortfolioText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioTextInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The complete content of the resume to be tailored.'),
  audienceProfile: z
    .string()
    .describe(
      'A description of the target audience, including their interests and requirements.'
    ),
});
export type GeneratePortfolioTextInput = z.infer<typeof GeneratePortfolioTextInputSchema>;

const GeneratePortfolioTextOutputSchema = z.object({
  tailoredText: z
    .string()
    .describe('The tailored portfolio text optimized for the specified audience.'),
});
export type GeneratePortfolioTextOutput = z.infer<typeof GeneratePortfolioTextOutputSchema>;

export async function generatePortfolioText(
  input: GeneratePortfolioTextInput
): Promise<GeneratePortfolioTextOutput> {
  return generatePortfolioTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioTextPrompt',
  input: {schema: GeneratePortfolioTextInputSchema},
  output: {schema: GeneratePortfolioTextOutputSchema},
  prompt: `You are an expert at tailoring resumes and portfolio texts to specific audiences.

  Based on the provided resume content and the description of the target audience, create a tailored portfolio text that highlights the most relevant skills and experience for that audience.

  Resume Content: {{{resumeContent}}}
  Audience Profile: {{{audienceProfile}}}

  Tailored Text:`,
});

const generatePortfolioTextFlow = ai.defineFlow(
  {
    name: 'generatePortfolioTextFlow',
    inputSchema: GeneratePortfolioTextInputSchema,
    outputSchema: GeneratePortfolioTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
