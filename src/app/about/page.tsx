import { Metadata } from 'next'
import Section from '@/components/ui/section'

export const metadata: Metadata = {
    title: 'About - InvoLead',
    description: 'About InvoLead — mission, team and values'
}

export default function About() {
    return (
        <main>
            <Section title="About Us">
                <p>We build products that help teams ship better software.</p>
            </Section>

            <Section title="Mission & Vision">
                <p>Mission: empower teams. Vision: create delightful experiences.</p>
            </Section>

            <Section title="Team">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg">Jane Doe — CEO</div>
                    <div className="p-6 border rounded-lg">John Smith — CTO</div>
                    <div className="p-6 border rounded-lg">Alex Roe — Design</div>
                </div>
            </Section>

            <Section title="Values">
                <ul className="list-disc pl-6">
                    <li>Quality</li>
                    <li>Collaboration</li>
                    <li>Security</li>
                </ul>
            </Section>

            <Section title="Join Us">
                <p>Interested in working together? Reach out.</p>
            </Section>
        </main>
    )
}
