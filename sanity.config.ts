'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { codeInput } from '@sanity/code-input'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema' // We'll create this
import { markdownSchema } from 'sanity-plugin-markdown'
import { table } from '@sanity/table'


const themeConfig = {
    config: {
        custom: {
            primaryColor: '#ef4444',
            secondaryColor: '#000000',
        },
        darkMode: true,
    },
    styles: {
        content: {
            preview: {
                media: {
                    // Adjust preview image styles
                    fit: 'cover',
                    border: '1px solid #eee',
                },
            },
        },
        edit: {
            container: {
                backgroundColor: '#ffffff',
            },
            textField: {
                caretColor: '#ef4444',
            },
        },
        studio: {
            navbar: {
                backgroundColor: '#000000',
                textColor: '#ffffff',
            },
        },
    },
}

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,

    schema: {
        types: schema.types,
    },

    plugins: [
        structureTool(),
        visionTool({ defaultApiVersion: apiVersion }),
        codeInput(),
        markdownSchema(),
        table(),
    ],
    theme: themeConfig


})
