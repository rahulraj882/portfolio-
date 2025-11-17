'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tailorContentForJob } from '@/ai/flows/tailor-content-for-job';
import { generatePortfolioText } from '@/ai/flows/generate-portfolio-text';
import { Wand2, Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type AiPersonalizerSectionProps = {
  resumeContent: string;
};

export default function AiPersonalizerSection({
  resumeContent,
}: AiPersonalizerSectionProps) {
  const [jobDescription, setJobDescription] = useState('');
  const [audienceProfile, setAudienceProfile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tailoredContent, setTailoredContent] = useState('');
  const { toast } = useToast();

  const handleTailorForJob = async () => {
    if (!jobDescription.trim()) {
      toast({
        title: 'Input required',
        description: 'Please enter a job description.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setTailoredContent('');
    try {
      const result = await tailorContentForJob({
        jobDescription,
        resumeContent,
      });
      setTailoredContent(result.tailoredContent);
    } catch (error) {
      console.error('Error tailoring content for job:', error);
      toast({
        title: 'Error',
        description: 'Failed to tailor content. Please try again.',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  };

  const handleGenerateForAudience = async () => {
    if (!audienceProfile.trim()) {
      toast({
        title: 'Input required',
        description: 'Please enter an audience profile.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setTailoredContent('');
    try {
      const result = await generatePortfolioText({
        audienceProfile,
        resumeContent,
      });
      setTailoredContent(result.tailoredText);
    } catch (error) {
      console.error('Error generating for audience:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate content. Please try again.',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    if (tailoredContent) {
      navigator.clipboard.writeText(tailoredContent);
      toast({
        title: 'Copied!',
        description: 'Tailored content has been copied to your clipboard.',
      });
    }
  };

  return (
    <SectionWrapper id="ai-personalizer" title="AI Resume Tailor" className="bg-muted">
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Use AI to tailor my resume for a specific job or audience. Paste a job description or describe an audience profile below to get a personalized summary.
      </p>
      <Tabs defaultValue="job" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="job">For a Job</TabsTrigger>
          <TabsTrigger value="audience">For an Audience</TabsTrigger>
        </TabsList>
        <TabsContent value="job">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={6}
                />
                <Button onClick={handleTailorForJob} disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Tailor Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audience">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Textarea
                  placeholder="Describe the target audience (e.g., 'a startup founder looking for a frontend lead', 'a recruiter from a big tech company')..."
                  value={audienceProfile}
                  onChange={(e) => setAudienceProfile(e.target.value)}
                  rows={6}
                />
                <Button onClick={handleGenerateForAudience} disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate for Audience
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {(isLoading || tailoredContent) && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-center mb-4">Generated Content</h3>
          <Card className="relative">
            <CardContent className="p-6">
              {isLoading ? (
                <div className="flex items-center justify-center min-h-[150px]">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                    className="absolute top-4 right-4"
                    aria-label="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <p className="text-muted-foreground whitespace-pre-wrap font-mono text-sm">
                    {tailoredContent}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </SectionWrapper>
  );
}
