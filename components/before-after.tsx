'use client'

import { motion } from 'framer-motion'
import { TechLabel } from './ui/tech-label'
import { GitPullRequest, ClipboardList, MessageCircle, ArrowRight, Circle, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import posthog from 'posthog-js'

const useCases = [
    {
        id: 'git',
        title: 'Git Auto PR Review Bot',
        icon: GitPullRequest,
        before: {
            code: `PUT /repos/<span class="text-red-500">{owner}</span>/<span class="text-red-500">{repo}</span>/pulls/<span class="text-red-500">{pull_number}</span>/merge
{
  "commit_title": "Merging PR",
  "sha": "abc123"
}`,
            highlight: ['Complex API calls with specific parameters'
                , 'Developers must manually provide the PR number, making the workflow rigid.',
                '"Approve PR #34343" works, but "Approve PR" without the number fails.'
            ],
        },
        after: {
            highlight: ['Simple natural language command', 'Conversation memory is maintained, allowing for more complex commands.'],
            messages: [
                { role: 'user', name: 'PR Review Expert', content: 'Get details for PR #34343' },
                { role: 'assistant', name: 'Git Agent', content: '{ "id": 34343, "title": "Fix bug", "user": { "login": "dev123" }, ... }' },
                { role: 'user', name: 'PR Review Expert', content: 'Approve PR', className: 'text-green-500' },
                { role: 'assistant', name: 'Git Agent', content: '{ "sha": "abc123", "merged": true, ... }' }
            ]
        },
        description: 'Simplify PR approvals with natural language commands',
        useCaseTitle: "Automate PR review, comments, and approval process"
    },
    {
        id: 'jira',
        title: 'Jira Task Management',
        icon: ClipboardList,
        before: {
            code: `POST /rest/api/3/issue
{
  "fields": {<span class="text-red-500">
    "project": { "key": "PROJ" },
    "summary": "New task",
    "issuetype": { "name": "Task" },
    "description": "Task description",
    "assignee": { "name": "john_doe" </span> 
    }
  }
}`,
            highlight: ['Detailed JSON structure required', 'Developers must provide all required fields in one go, leading to potential failures if any field is missing.'],
        },
        after: {
            highlight: ['Conversational task creation', 'Jira Agent ensures all required fields are provided, making the process robust and user-friendly.'],
            messages: [
                { role: 'user', name: 'Project Manager', content: 'Create task "New feature" in project "PROJ"' },
                { role: 'assistant', name: 'Jira Agent', content: 'Please provide a description for the task.', className: 'text-green-500' },
                { role: 'user', name: 'Project Manager', content: 'Implement user authentication feature' },
                { role: 'assistant', name: 'Jira Agent', content: '{ "id": "10000", "key": "PROJ-1", ... }' }
            ]
        },
        description: 'Create and manage tasks using conversational language',
        useCaseTitle: "Automate task creation, updates, and status tracking"
    },
    {
        id: 'slack',
        title: 'Slack Integration for Team Collaboration',
        icon: MessageCircle,
        before: {
            code: `<span class="text-red-500">GET</span> /api/conversations.history?channel=C123456&limit=1
<span class="text-red-500">POST</span> /api/chat.update
{
  "channel": "C123456",
  "ts": "<span class="text-red-500">1234567890.123456</span>",
  "text": "Updated message"
}`,
            highlight: ['Multiple API calls required', 'Developers must handle the sequence and dependencies between these calls manually.'],
        },
        after: {
            highlight: ['Single natural language command', 'Slack Agent automates the entire process, eliminating the need for multiple tools and manual handling.'],
            messages: [
                { role: 'user', name: 'Comms Manager', content: 'Update last message in #general to "Meeting at 3PM"', className: 'text-green-500' },
                { role: 'assistant', name: 'Slack Agent', content: 'Fetching last message...' },
                { role: 'assistant', name: 'Slack Agent', content: 'Updating message...' },
                { role: 'assistant', name: 'Slack Agent', content: '{ "ok": true, "ts": "1234567890.123456", ... }' }
            ]
        },
        description: 'Seamlessly update messages and send notifications',
        useCaseTitle: "Automate team notifications and updates"
    },
]

export function BeforeAfterSection() {
    return (
        <section className="py-24 bg-[#f5f5f5] text-black relative overflow-hidden" id="usecases">
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03]">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            <TechLabel text="USE_CASE_EXAMPLE" position="left" className="top-8" />
            <TechLabel text="USECASE.TSX" position="right" className="top-8" />

            <div className="container mx-auto px-4 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-4 text-center"
                >
                    Simplifying API Integration
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-800 text-lg mb-12 text-center"
                >
                    Transform complex workflows into seamless interactions
                </motion.p>

                <div className="space-y-16">
                    {useCases.map((useCase, index) => (
                        <UseCaseExample key={useCase.id} useCase={useCase} index={index} />
                    ))}
                </div>
                <div className="flex gap-4 items-center justify-center mt-12">
                    <Link href="#contact"
                        onClick={() => {
                            posthog.capture("clicked USECASES CTA")
                        }}
                        className={'transition-colors text-white flex items-center gap-2 group bg-black px-8 py-3 hover:bg-red-500'}>
                        Discover Better Workflows with Intelligent Agents!
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

function ChatMessage({ message, isLast }) {
    const isUser = message.role === 'user'

    return (
        <motion.div
            initial={{ opacity: 0, x: isUser ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-2`}
        >
            <div className={`max-w-[80%] ${isUser ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                <div className={`text-xs text-neutral-400 mb-1 ${isUser ? 'text-left' : 'text-right'} text-white`}>
                    {message.name}
                </div>
                <div className={`rounded-lg p-3 ${isUser ? '' : ''} ${message.className || ''}`}>
                    <pre className="text-sm whitespace-pre-wrap font-mono text-green-200">
                        <code>{message.content}</code>
                    </pre>
                </div>
                {!isLast && (
                    <div className={`w-px h-4 bg-neutral-700 ${isUser ? 'ml-4' : 'mr-4'} mx-auto`} />
                )}
            </div>
        </motion.div>
    )
}

function UseCaseExample({ useCase, index }) {
    const Icon = useCase.icon
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8"
        >
            <div className="flex items-center gap-4 mb-6">
                <Icon className="w-6 h-6" />
                <h3 className="text-2xl font-bold">{useCase.title}</h3>
            </div>
            <p className="text-gray-800 mb-6 decoration-white">{useCase.useCaseTitle}.{" "}{useCase.description}.</p>
            <div className="grid md:grid-cols-2 gap-8 relative">
                <div>
                    <h4 className="text-lg font-semibold mb-4 underline underline-offset-4 decoration-wavy">Before</h4>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4"
                    >
                        <pre className="text-sm overflow-x-auto text-wrap border border-neutral-200 rounded-lg p-4 bg-black text-white">
                            <code dangerouslySetInnerHTML={{ __html: useCase.before.code }} />
                        </pre>
                    </motion.div>
                    {useCase.before.highlight.map((highlight, index) => (
                        <ul key={index} className="text-red-600 mt-2 text-sm list-disc">
                            <li key={index}>{highlight}</li>
                        </ul>
                    ))}
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 underline underline-offset-4 decoration-wavy">After</h4>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-4 p-4 border border-neutral-200 rounded-lg bg-black"
                    >
                        <div className="space-y-4">
                            {useCase.after.messages.map((message, idx) => (
                                <ChatMessage
                                    key={idx}
                                    message={message}
                                    isLast={idx === useCase.after.messages.length - 1}
                                />
                            ))}
                        </div>
                    </motion.div>
                    {useCase.after.highlight.map((highlight, index) => (
                        <ul key={index} className="text-green-600 mt-2 text-sm list-disc">
                            <li key={index}>{highlight}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
