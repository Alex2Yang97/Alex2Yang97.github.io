---
name: blog-notes-improver
description: Improves and restructures user notes on blog articles into polished blog posts. Use when the user shares an article link or article content along with their notes, key takeaways, or summary, and wants help identifying missed ideas, reorganizing their notes, or turning them into a blog post. Also use when the user says "improve my notes", "summarize this article", "write a blog from my notes", "what did I miss in this article", or asks to create a reading-notes blog post.
---

# Blog Notes Improver

Takes an article (via URL or pasted content) and the user's rough notes, then produces a clean, well-structured blog post saved to `content/blog/`.

## Workflow

### Step 1: Collect inputs

You need two things from the user:

1. **The article** — either a URL or the full text pasted into the conversation.
2. **The user's notes** — bullet points, key takeaways, a rough summary, or any form of notes they took while reading.

If the user only provides one of these, ask for the other before proceeding.

### Step 2: Read the article

- If the user provides a **URL**, fetch it and extract the main text content. Strip navigation, ads, and boilerplate. If the fetch fails (paywall, auth wall, etc.), ask the user to paste the article content directly.
- If the user provides **pasted content**, use it as-is.

### Step 3: Extract key ideas from the article

Read through the article carefully and pull out:

- The **main thesis** or central argument
- **Key ideas** and supporting points
- **Important data**, examples, or evidence
- **Terminology** specific to the domain
- Any **actionable takeaways** or conclusions

### Step 4: Gap analysis — compare with user notes

Compare the article's key ideas against the user's notes. Build a short report:

- **Covered well** — ideas the user already captured
- **Missed or under-covered** — important points the article makes that the user's notes don't mention or only touch on briefly
- **Could be restructured** — notes that would flow better in a different order or grouping

Present this report to the user. Ask if they want to:
- Include all the missed ideas, or only some of them
- Keep their original structure or use the suggested restructuring
- Add any extra thoughts before you generate the blog post

Wait for their confirmation before moving to the next step. Do not skip this — the user should have a say in what goes into their blog post.

### Step 5: Generate the blog post

Write an MDX file and save it to `content/blog/<slug>.mdx`.

**Filename**: derive a kebab-case slug from the title. Lowercase, hyphens instead of spaces, no special characters. Example: `understanding-rag-patterns.mdx`.

**Frontmatter** — use this exact format:

```yaml
---
title: "Your Post Title Here"
date: "YYYY-MM-DD"
excerpt: "A one-sentence summary of the post, under 160 characters."
tags: ["tag1", "tag2", "tag3"]
---
```

- `title`: a clear, descriptive title (quoted string)
- `date`: today's date in ISO format like `"2026-03-28"` (quoted string)
- `excerpt`: a short summary for the blog listing page and SEO (quoted string)
- `tags`: an array of lowercase tag strings relevant to the topic

**Body structure** — organize the post with clear sections:

1. **Opening paragraph** — what the article is about and why it matters, in 2-3 sentences
2. **Key ideas** — the core content, broken into sections with `##` headings
3. **What stood out** — the user's own perspective or takeaways (drawn from their notes)
4. **Wrap-up** — a brief closing that ties things together

Use `##` for main sections and `###` for subsections. Keep the hierarchy flat — avoid going deeper than `###`.

### Step 6: Self-check before saving

Before writing the file, verify:

- [ ] All key ideas from the article are covered (including ones from the gap analysis the user approved)
- [ ] The user's original notes and perspective are woven in, not discarded
- [ ] Notes are restructured into a logical flow, not just listed in the order the user wrote them
- [ ] No obscure or fancy vocabulary slipped in (see Writing Style below)
- [ ] All four frontmatter fields are present and correctly formatted
- [ ] The slug is valid kebab-case and the file goes in `content/blog/`
- [ ] The excerpt is under 160 characters

## Writing Style

These rules apply to everything you write in the blog post:

- **Use plain, everyday English.** Write like you're explaining something to a smart friend. Avoid words like "elucidate", "paradigm", "leverage" (as a verb), "utilize", "aforementioned", "henceforth", or similar stiff language. Prefer "use" over "utilize", "explain" over "elucidate", "approach" over "paradigm".
- **Keep domain-specific terminology.** Technical terms that the article uses and readers would need to know should stay as-is. Words like "transformer", "RAG", "embedding", "fine-tuning", "MCP", "API", "latency" are fine — they're the language of the field, not fancy vocabulary.
- **Short sentences, clear structure.** Break up long sentences. One idea per sentence where possible. Use bullet points and subheadings to make the post scannable.
- **Active voice.** Prefer "the model generates a response" over "a response is generated by the model".
- **No filler.** Cut phrases like "it is important to note that", "it goes without saying", "in order to". Just say the thing.
- **Link back to the source.** Include a link to the original article near the top of the post so readers can read the full thing themselves.
