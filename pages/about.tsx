import React from 'react';
// Import icons from 'icones.js.org'
import { Hubot } from '@icones/codicon/hubot';
import { DiscordLogo } from '@icones/radix-icons/discord-logo';
import { TerminalLinux } from '@icones/codicon/terminal-linux';
import { Gto } from '@icones/cryptocurrency/gto';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        {/* User's brief introduction */}
        [Brief introduction about yourself, your journey, and your interests]
      </p>

      <section className="career-goals">
        <h2>Career Goals</h2>
        <p>
          {/* User's career goals and aspirations */}
          [Talk about your career goals, aspirations, and what you are looking for in your professional life]
        </p>
      </section>

      <section className="hobbies-interests">
        <h2>Hobbies & Interests</h2>
        <p>
          {/* User's hobbies and interests */}
          [Share your hobbies and interests here]
        </p>
      </section>

      <section className="connect-with-me">
        <h2>Let's Connect</h2>
        <p>
          {/* Invitation for connections and discussions */}
          [Invite visitors to connect with you for discussions, collaborations, or just a friendly chat]
        </p>
        <div className="social-links">
          {/* Social Media Icons and Links */}
          <a href="[GitHub Link]">
            <Hubot title="GitHub" />
          </a>
          <a href="[Discord Link]">
            <DiscordLogo title="Discord" />
          </a>
          <a href="[LinkedIn/Twitter/Other Profile Link]">
            <TerminalLinux title="LinkedIn/Twitter/Other" />
          </a>
          <a href="[Cryptocurrency/Blockchain Related Link]">
            <Gto title="Cryptocurrency/Blockchain" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;


