"use client"

import { motion } from 'framer-motion';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { TechLabel } from './ui/tech-label';
import { GitPullRequest, MessageSquare, Check, Ticket, ListTodo, CheckSquare, MessageCircle, Reply, ThumbsUp, LucideIcon } from 'lucide-react';
import { CarouselControls } from './carousel-controls';
import { useEffect, useState } from 'react';


const useCases = [
    {
        id: 'git',
        title: 'Git PR Review Made Easy',
        description: 'Imagine building an agentic application for Git PR review. Our Git agent simplifies all steps into natural language commands.',
        steps: [
            {
                icon: GitPullRequest,
                title: 'Get PR Data',
                description: 'Fetch pull request information automatically'
            },
            {
                icon: MessageSquare,
                title: 'Handle Comments',
                description: 'Manage PR comments with natural language'
            },
            {
                icon: Check,
                title: 'Merge PR',
                description: 'Automated merging when approved'
            }
        ]
    },
    {
        id: 'jira',
        title: 'Jira Task Management',
        description: 'Transform your Jira workflow with AI-powered task management. Seamlessly create, update, and track issues using natural language.',
        steps: [
            {
                icon: Ticket,
                title: 'Create Issues',
                description: 'Generate well-structured Jira tickets from conversations'
            },
            {
                icon: ListTodo,
                title: 'Track Progress',
                description: 'Monitor and update task status naturally'
            },
            {
                icon: CheckSquare,
                title: 'Manage Sprints',
                description: 'Automate sprint planning and organization'
            }
        ]
    },
    {
        id: 'slack',
        title: 'Slack Communication Hub',
        description: 'Enhance your Slack workspace with AI-powered communication tools. Streamline team collaboration and automate responses.',
        steps: [
            {
                icon: MessageCircle,
                title: 'Smart Responses',
                description: 'Generate contextual message suggestions'
            },
            {
                icon: Reply,
                title: 'Thread Management',
                description: 'Organize and summarize conversations'
            },
            {
                icon: ThumbsUp,
                title: 'Action Items',
                description: 'Extract and track tasks from messages'
            }
        ]
    }
];

interface UseCaseStepProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay: number;
}

function UseCaseStep({ icon: Icon, title, description, delay }: UseCaseStepProps) {
    return (
        <div
            className="flex items-start gap-6 bg-black p-6 border border-neutral-200 relative group hover:border-red-500 transition-all"
        >
            <div className="text-red-500 p-3 bg-red-50 rounded-lg">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-neutral-200">{description}</p>
            </div>

            <div className="absolute -top-12 -right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-8 right-0 w-full h-px bg-red-500" />
                <div className="absolute top-8 right-0 h-full w-px bg-red-500" />
            </div>
        </div>
    );
}

export function UseCasesSection() {
    const [api, setApi] = useState<ReturnType<typeof useCarousel>>();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrentIndex(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="usecases">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
                    {[...Array(400)].map((_, i) => (
                        <div
                            key={i}
                            className="border-[0.5px] border-white opacity-10"
                        />
                    ))}
                </div>
            </div>

            <TechLabel text="USE_CASE_EXAMPLE" position="left" className="top-8" />
            <TechLabel text="USECASE.TSX" position="right" className="top-8" />

            <div className="container mx-auto px-4 relative">
                <Carousel className="w-full max-w-4xl mx-auto" setApi={setApi}>
                    <CarouselContent>
                        {useCases.map((useCase, index) => (
                            <CarouselItem key={useCase.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full"
                                >
                                    <h2 className="text-4xl font-bold mb-8 text-center text-white">
                                        {useCase.title}
                                    </h2>
                                    <p className="text-neutral-400 text-lg mb-12 text-center">
                                        {useCase.description}
                                    </p>
                                    <div className="space-y-8 md:px-24 px-0">
                                        {useCase.steps.map((step, stepIndex) => (
                                            <UseCaseStep
                                                key={stepIndex}
                                                icon={step.icon}
                                                title={step.title}
                                                description={step.description}
                                                delay={stepIndex * 0.2}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-black border-red-500 text-red-500 hover:bg-red-500 hover:text-white hidden md:flex" />
                    <CarouselNext className="bg-black border-red-500 text-red-500 hover:bg-red-500 hover:text-white hidden md:flex" />
                </Carousel>
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    {useCases.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-red-500' : 'bg-neutral-700'}`}
                            animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

