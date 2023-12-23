import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 3 },
  show: { opacity: 1, y: 0, transition: { type: "keyframe" } },
};

export default function ConsoleAnimated() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="text-gray overflow-hidden whitespace-nowrap font-mono text-sm"
      data-type-row-delay="50"
    >
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:36</span>]<span> Starting </span>
        &apos;<span className="color-fg-accent">watch-extension:vscode-api-tests</span>&apos; ...
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:36</span>]<span> Finished </span>
        &apos;<span className="color-fg-accent">clean-extension:typescript-language-features</span>&apos; after
        <span className="color-fg-done">248 ms</span>
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:36</span>]<span> Starting </span>
        &apos;<span className="color-fg-accent">watch-extension:typescript-language-features</span>&apos; ...
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:36</span>]<span> Finished </span>
        &apos;<span className="color-fg-accent">clean-extension:php-language-features</span>&apos; after
        <span className="color-fg-done">384 ms</span>
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:36</span>]<span> Starting </span>
        &apos;<span className="color-fg-accent">watch-extension:php-language-features</span>&apos; ...
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:40</span>]<span> Finished </span>
        &apos;<span className="color-fg-accent">clean-extension:html-language-features-server</span>&apos; after
        <span className="color-fg-done">4.66 s</span>
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:40</span>]<span> Starting </span>
        &apos;<span className="color-fg-accent">watch-extension:html-language-features-server</span>&apos; ...
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:43</span>]<span> Finished </span>
        &apos;<span className="color-fg-accent">clean-client</span>&apos; after
        <span className="color-fg-done">7.33 s</span>
      </motion.div>
      <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
        [<span className="color-fg-subtle">09:43:43</span>]<span> Starting </span>
        &apos;<span className="color-fg-accent">watch-client</span>&apos; ...
      </motion.div>
    </motion.div>
  );
}
