'use client'

import { motion } from 'framer-motion'
import { TechLabel } from './ui/tech-label'
import { GitPullRequest, ClipboardList, MessageCircle, ArrowRight, Circle } from 'lucide-react'

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
            code: `PR Review Expert: Get details for PR #34343
Git Agent: { "id": 34343, "title": "Fix bug", "user": { "login": "dev123" }, ... }
PR Review Expert: <span class="text-green-500">Approve PR</span>
Git Agent: { "sha": "abc123", "merged": true, ... }`,
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
            code: `Project Manager: "Create task 'New feature' in project 'PROJ'"
Jira Agent: <span class="text-green-500">Please provide a description for the task.</span>
Project Manager: "Implement user authentication feature"
Jira Agent: { "id": "10000", "key": "PROJ-1", ... }`,
        },
        description: 'Create and manage tasks using conversational language',
        useCaseTitle: " Automate task creation, updates, and status tracking"
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
            code: `Comms Manager: <span class="text-green-500">"Update last message in #general to 'Meeting at 3PM'"</span>
Slack Agent: Fetching last message...
Slack Agent: Updating message...
Slack Agent: { "ok": true, "ts": "1234567890.123456", ... }`,
        },
        description: 'Seamlessly update messages and send notifications',
        useCaseTitle: "Automate team notifications and updates"
    },
]

export function BeforeAfterSection() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden" id="usecases">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
                    {[...Array(400)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.1 }}
                            animate={{ opacity: Math.random() }}
                            transition={{ duration: 2, repeat: 1 }}
                            className="border-[0.5px] border-white"
                        />
                    ))}
                </div>
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
                    className="text-gray-400 text-lg mb-12 text-center"
                >
                    Transform complex workflows into seamless interactions
                </motion.p>

                <div className="space-y-16">
                    {useCases.map((useCase, index) => (
                        <UseCaseExample key={useCase.id} useCase={useCase} index={index} />
                    ))}
                </div>

            </div>
        </section>
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
            <p className="text-gray-400 mb-6 decoration-white ">{useCase.useCaseTitle}.{" "}{useCase.description}.</p>
            <div className="grid md:grid-cols-2 gap-8 relative">
                <div>
                    <h4 className="text-lg font-semibold mb-4 underline underline-offset-4 decoration-wavy">Before</h4>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className=" p-4"
                    >
                        <pre className="text-sm overflow-x-auto text-wrap border border-neutral-200 rounded-lg p-4 bg-black">
                            <code dangerouslySetInnerHTML={{ __html: useCase.before.code }} />
                        </pre>
                    </motion.div>
                    {useCase.before.highlight.map((highlight, index) => (
                        <ul key={index} className="text-red-400 mt-2 text-sm list-disc">
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
                        className="mt-4  p-4"
                    >
                        <pre className="text-sm overflow-x-auto text-wrap border border-neutral-200 rounded-lg p-4 bg-black">
                            <code dangerouslySetInnerHTML={{ __html: useCase.after.code }} />
                        </pre>
                    </motion.div>
                    {useCase.after.highlight.map((highlight, index) => (
                        <ul key={index} className="text-green-400 mt-2 text-sm list-disc">
                            <li key={index}>{highlight}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}


