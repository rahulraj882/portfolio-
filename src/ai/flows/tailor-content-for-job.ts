'use server';
/**
 * @fileOverview A flow that tailors portfolio content for different job applications.
 *
 * - tailorContentForJob - A function that tailors the portfolio content based on a job description.
 * - TailorContentForJobInput - The input type for the tailorContentForJob function.
 * - TailorContentForJobOutput - The return type for the tailorContentForJob function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorContentForJobInputSchema = z.object({
  jobDescription: z.string().describe('The job description to tailor the portfolio content for.'),
  resumeContent: z.string().describe('The original resume content to tailor.'),
});
export type TailorContentForJobInput = z.infer<typeof TailorContentForJobInputSchema>;

const TailorContentForJobOutputSchema = z.object({
  tailoredContent: z.string().describe('The tailored portfolio content for the job description.'),
});
export type TailorContentForJobOutput = z.infer<typeof TailorContentForJobOutputSchema>;

export async function tailorContentForJob(input: TailorContentForJobInput): Promise<TailorContentForJobOutput> {
  return tailorContentForJobFlow(input);
}

const tailorContentForJobPrompt = ai.definePrompt({
  name: 'tailorContentForJobPrompt',
  input: {schema: TailorContentForJobInputSchema},
  output: {schema: TailorContentForJobOutputSchema},
  prompt: `You are an expert resume tailor. You will be given a job description and a resume content. You will tailor the resume content to highlight the skills and experience that are most relevant to the job description.

Job Description: {{{jobDescription}}}

Resume Content: {{{resumeContent}}}

Tailored Resume Content:`,  
});

const tailorContentForJobFlow = ai.defineFlow(
  {
    name: 'tailorContentForJobFlow',
    inputSchema: TailorContentForJobInputSchema,
    outputSchema: TailorContentForJobOutputSchema,
  },
  async input => {
    const {output} = await tailorContentForJobPrompt(input);
    return output!;
  }
);
