("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9124.register("eEcQN",(function(e,a){function n(e){!function(e){var a=/\\(?:[^a-z()[\]]|[a-z*]+)/i,n={"equation-command":{pattern:a,alias:"regex"}};e.languages.latex={comment:/%.*/m,cdata:{pattern:/(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:n,alias:"string"},{pattern:/(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:n,alias:"string"}],keyword:{pattern:/(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,lookbehind:!0,alias:"class-name"},function:{pattern:a,alias:"selector"},punctuation:/[[\]{}&]/},e.languages.tex=e.languages.latex,e.languages.context=e.languages.latex}(e)}e.exports=n,n.displayName="latex",n.aliases=["tex","context"]}));
//# sourceMappingURL=latex.06bc0cbc.js.map