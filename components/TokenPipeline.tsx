interface PipelineStepProps {
  stepNumber: number;
  toolName: string;
  title: string;
  description: string;
  detailedExplanation: string;
  codeExample: {
    label: string;
    code: string;
  }[];
  transformNote?: string;
  numberColor: string;
}

function PipelineStep({ 
  stepNumber, 
  toolName, 
  title, 
  description, 
  detailedExplanation,
  codeExample,
  transformNote,
  numberColor
}: PipelineStepProps) {
  return (
    <div className="w-full">
      {/* Step number - large, outside box with brand colour */}
      <div className="mb-8">
        <div className={`text-[120px] md:text-[180px] font-bold leading-none ${numberColor}`} style={{ letterSpacing: '-0.02em' }}>
          {stepNumber}
        </div>
      </div>
      
      <div className="relative -mt-24 md:-mt-36">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>
            {toolName}
          </h3>
          <p className="text-lg font-semibold text-text-primary mb-2">{title}</p>
          <p className="text-text-secondary mb-4">{description}</p>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">{detailedExplanation}</p>
        </div>

        {/* Code examples */}
        <div className="space-y-4">
        {codeExample.map((example, idx) => (
          <div key={idx} className="bg-surface-elevated p-5">
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                {example.label}
              </span>
            </div>
            <pre className="text-sm text-text-secondary font-mono overflow-x-auto whitespace-pre-wrap">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
        {transformNote && (
          <div className="mt-4 text-sm text-text-muted italic">
            {transformNote}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default function TokenPipeline() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
            The Token Pipeline
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-4">
            Every design decision flows through a precise pipeline, from brand guidelines in Figma to production code. Follow a single button as it transforms through each stage. This workflow ensures consistency, eliminates manual updates, and keeps design and code synchronized.
          </p>
          
          {/* Built With section moved here */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-12" style={{ letterSpacing: '-0.02em' }}>
              Built With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {/* Figma */}
              <a 
                href="https://figma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-14 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 1024 1280" fill="none">
                    <path d="M312 840C312 784.772 356.772 740 412 740H512V840C512 895.228 467.228 940 412 940C356.772 940 312 895.228 312 840Z" fill="#24CB71"/>
                    <path d="M512 340V540H612C667.228 540 712 495.228 712 440C712 384.772 667.228 340 612 340H512Z" fill="#FF7237"/>
                    <path d="M611.167 740C666.395 740 711.167 695.228 711.167 640C711.167 584.772 666.395 540 611.167 540C555.939 540 511.167 584.772 511.167 640C511.167 695.228 555.939 740 611.167 740Z" fill="#00B6FF"/>
                    <path d="M312 440C312 495.228 356.772 540 412 540H512V340H412C356.772 340 312 384.772 312 440Z" fill="#FF3737"/>
                    <path d="M312 640C312 695.228 356.772 740 412 740H512V540H412C356.772 540 312 584.772 312 640Z" fill="#874FFF"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Figma</p>
                  <p className="text-sm text-text-secondary">Design & Prototyping</p>
                </div>
              </a>

              {/* Next.js */}
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 180 180" fill="none">
                    <mask id="mask0_408_139" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                      <circle cx="90" cy="90" r="90" fill="black"/>
                    </mask>
                    <g mask="url(#mask0_408_139)">
                      <circle cx="90" cy="90" r="90" fill="black"/>
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
                      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Next.js 16</p>
                  <p className="text-sm text-text-secondary">React Framework</p>
                </div>
              </a>

              {/* Tailwind CSS */}
              <a 
                href="https://tailwindcss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 248 248">
                    <path fill="#06B6D4" d="M124,0C70.8,0,46.4,26.4,40,79.2c9.6-26.4,20.8-36.4,33.6-30c7.3,1.8,12.5,7,18.3,12.8 C103.7,73.8,118.1,88,148,88c53.2,0,77.6-26.4,84-79.2c-9.6,26.4-20.8,36.4-33.6,30c-7.3-1.8-12.5-7-18.3-12.8 C168.3,14.2,153.9,0,124,0z M76,88c-53.2,0-77.6,26.4-84,79.2c9.6-26.4,20.8-36.4,33.6-30c7.3,1.8,12.5,7,18.3,12.8 C55.7,161.8,70.1,176,100,176c53.2,0,77.6-26.4,84-79.2c-9.6,26.4-20.8,36.4-33.6,30c-7.3-1.8-12.5-7-18.3-12.8 C120.3,102.2,105.9,88,76,88z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Tailwind CSS v4</p>
                  <p className="text-sm text-text-secondary">CSS Framework</p>
                </div>
              </a>

              {/* Token Studio */}
              <a 
                href="https://tokens.studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6232 6.15022C20.9742 5.82622 19.6882 4.63822 19.3382 3.11822C18.6652 0.190221 15.2802 -0.674778 13.0002 0.520222C13.9252 1.15622 14.5502 2.12622 14.6952 3.22522C14.7472 3.53122 14.8432 3.83122 14.9632 4.12122C15.3506 5.00002 16.0133 5.72901 16.8512 6.19822C17.3732 6.50522 17.9733 6.66522 18.5553 6.81822C19.0333 6.97622 19.4712 7.20822 19.8382 7.51622C21.3762 8.74022 21.3762 11.2612 19.8382 12.4852C19.4712 12.7932 19.0333 13.0252 18.5553 13.1832C17.9753 13.3362 17.3732 13.4952 16.8512 13.8032C15.7472 14.4202 14.9112 15.5232 14.6952 16.7762C14.5502 17.8762 13.9252 18.8462 13.0002 19.4822C15.2782 20.6752 18.6632 19.8082 19.3382 16.8832C19.6882 15.3632 20.9742 14.1752 22.6232 13.8512C27.1262 12.9682 27.1262 7.03522 22.6232 6.15122V6.15022ZM11.3053 16.7772C11.2498 16.4691 11.1599 16.1682 11.0373 15.8802C10.6499 15.0014 9.98721 14.2724 9.14925 13.8032C8.62725 13.4972 8.02725 13.3372 7.44525 13.1832C6.9772 13.034 6.5418 12.7971 6.16225 12.4852C4.62425 11.2612 4.62425 8.74022 6.16225 7.51622C6.52925 7.20822 6.96725 6.97622 7.44525 6.81822C8.02525 6.66422 8.62725 6.50622 9.14925 6.19822C10.2543 5.58122 11.0893 4.47822 11.3053 3.22422C11.4503 2.12422 12.0752 1.15422 13.0002 0.519221C10.7222 -0.674779 7.33725 0.190221 6.66225 3.11722C6.31225 4.63722 5.02525 5.82622 3.37725 6.14922C-1.12575 7.03322 -1.12575 12.9672 3.37725 13.8502C5.02425 14.1732 6.31225 15.3622 6.66225 16.8822C7.33525 19.8092 10.7202 20.6752 13.0002 19.4802C12.0752 18.8442 11.4503 17.8742 11.3053 16.7752V16.7772Z" fill="#0C0F0F"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Token Studio</p>
                  <p className="text-sm text-text-secondary">Design Tokens</p>
                </div>
              </a>

              {/* Style Dictionary */}
              <a 
                href="https://amzn.github.io/style-dictionary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-12 transition-opacity group-hover:opacity-70" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M240 399C260.88 399 281.556 394.887 300.847 386.897C320.137 378.906 337.665 367.194 352.43 352.43C367.194 337.665 378.906 320.137 386.897 300.847C394.887 281.556 399 260.88 399 240L240 240V399Z" fill="#80D9D6"/>
                    <path d="M240 2.00268e-05C208.483 2.14045e-05 177.274 6.20781 148.156 18.2689C119.038 30.3301 92.5804 48.0083 70.2944 70.2944C48.0083 92.5805 30.33 119.038 18.2689 148.156C6.20779 177.274 7.73478e-06 208.483 1.04901e-05 240L240 240L240 2.00268e-05Z" fill="#80D9D6"/>
                    <path d="M399 240C399 219.12 394.887 198.444 386.897 179.153C378.906 159.863 367.194 142.335 352.43 127.57C337.665 112.806 320.137 101.094 300.847 93.1032C281.556 85.1127 260.88 81 240 81C219.12 81 198.444 85.1127 179.153 93.1032C159.863 101.094 142.335 112.806 127.57 127.57C112.806 142.335 101.094 159.863 93.1032 179.153C85.1127 198.444 81 219.12 81 240L240 240L399 240Z" fill="#3FC6BF"/>
                    <circle cx="240" cy="319.5" r="79.5" fill="#80D9D6"/>
                    <ellipse cx="240" cy="319.5" rx="38" ry="38.5" fill="#40C8C1"/>
                    <path d="M319.5 319.5C319.5 309.06 317.444 298.722 313.448 289.077C309.453 279.431 303.597 270.667 296.215 263.285C288.833 255.903 280.069 250.047 270.423 246.052C260.778 242.056 250.44 240 240 240L240 319.5H319.5Z" fill="#3FC6BF"/>
                    <path d="M278 319.5C278 314.444 277.017 309.438 275.107 304.767C273.198 300.096 270.399 295.851 266.87 292.276C263.341 288.701 259.152 285.865 254.542 283.931C249.932 281.996 244.99 281 240 281L240 319.5H278Z" fill="#3FC6BF"/>
                    <path d="M259 301C259 298.505 258.509 296.034 257.554 293.729C256.599 291.424 255.199 289.329 253.435 287.565C251.671 285.801 249.576 284.401 247.271 283.446C244.966 282.491 242.495 282 240 282L240 301H259Z" fill="#1FBEB3"/>
                    <path d="M240 399C250.44 399 260.778 396.944 270.423 392.948C280.069 388.953 288.833 383.097 296.215 375.715C303.597 368.333 309.453 359.569 313.448 349.923C317.444 340.278 319.5 329.94 319.5 319.5L240 319.5L240 399Z" fill="#1FBDB5"/>
                    <path d="M240 358C244.99 358 249.932 357.004 254.542 355.069C259.152 353.135 263.341 350.299 266.87 346.724C270.399 343.149 273.198 338.904 275.107 334.233C277.017 329.562 278 324.556 278 319.5L240 319.5L240 358Z" fill="#0FB6B0"/>
                    <path d="M240 320C242.495 320 244.966 319.509 247.271 318.554C249.576 317.599 251.671 316.199 253.435 314.435C255.199 312.671 256.599 310.576 257.554 308.271C258.509 305.966 259 303.495 259 301H240L240 320Z" fill="#0FB6B0"/>
                    <path d="M160.5 319.5C160.5 329.94 162.556 340.278 166.552 349.923C170.547 359.569 176.403 368.333 183.785 375.715C191.167 383.097 199.931 388.953 209.577 392.948C219.222 396.944 229.56 399 240 399L240 319.5L160.5 319.5Z" fill="#3FC6BF"/>
                    <path d="M202 319.5C202 324.556 202.983 329.562 204.893 334.233C206.802 338.904 209.601 343.149 213.13 346.724C216.659 350.299 220.848 353.135 225.458 355.069C230.068 357.004 235.01 358 240 358L240 319.5L202 319.5Z" fill="#0FB6B0"/>
                    <path d="M221 301C221 303.495 221.491 305.966 222.446 308.271C223.401 310.576 224.801 312.671 226.565 314.435C228.329 316.199 230.424 317.599 232.729 318.554C235.034 319.509 237.505 320 240 320L240 301L221 301Z" fill="#0FB6B0"/>
                    <circle cx="96" cy="181" r="41" fill="white"/>
                    <circle cx="96" cy="181" r="19" fill="#303A42"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Style Dictionary</p>
                  <p className="text-sm text-text-secondary">Token Transform</p>
                </div>
              </a>

              {/* ShadCN UI */}
              <a 
                href="https://ui.shadcn.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_790_3387)">
                      <path d="M81.25 49.9996L50 81.2496" stroke="black" strokeWidth="6.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M75 15.6246L15.625 74.9996" stroke="black" strokeWidth="6.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_790_3387">
                        <rect width="100" height="100" fill="white" transform="translate(0 -0.000366211)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>ShadCN UI</p>
                  <p className="text-sm text-text-secondary">Components</p>
                </div>
              </a>

              {/* Storybook */}
              <a 
                href="https://storybook.js.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-14 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 256 319" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <defs>
                      <path d="M9.872 293.324.012 30.574C-.315 21.895 6.338 14.54 15.005 14L238.494.032c8.822-.552 16.42 6.153 16.972 14.975.02.332.031.665.031.998v286.314c0 8.839-7.165 16.004-16.004 16.004-.24 0-.48-.005-.718-.016l-213.627-9.595c-8.32-.373-14.963-7.065-15.276-15.388Z" id="storybook__a"/>
                    </defs>
                    <mask id="storybook__b" fill="#fff">
                      <use xlinkHref="#storybook__a"/>
                    </mask>
                    <use fill="#FF4785" xlinkHref="#storybook__a"/>
                    <path d="m188.665 39.127 1.527-36.716L220.884 0l1.322 37.863a2.387 2.387 0 0 1-3.864 1.96l-11.835-9.325-14.013 10.63a2.387 2.387 0 0 1-3.829-2.001Zm-39.251 80.853c0 6.227 41.942 3.243 47.572-1.131 0-42.402-22.752-64.684-64.415-64.684-41.662 0-65.005 22.628-65.005 56.57 0 59.117 79.78 60.249 79.78 92.494 0 9.052-4.433 14.426-14.184 14.426-12.705 0-17.729-6.49-17.138-28.552 0-4.786-48.458-6.278-49.936 0-3.762 53.466 29.548 68.887 67.665 68.887 36.935 0 65.892-19.687 65.892-55.326 0-63.36-80.961-61.663-80.961-93.06 0-12.728 9.455-14.425 15.07-14.425 5.909 0 16.546 1.042 15.66 24.801Z" fill="#FFF" mask="url(#storybook__b)"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Storybook</p>
                  <p className="text-sm text-text-secondary">Component Library</p>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="black"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>GitHub</p>
                  <p className="text-sm text-text-secondary">Version Control</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {/* Step 1: Figma */}
          <PipelineStep
            stepNumber={1}
            toolName="Figma"
            title="Primitive Tokens"
            description="Designers define brand colours, typography, and spacing as variables in Figma"
            detailedExplanation="Raw design values from brand guidelines: hex codes, typography, spacing. They're called 'primitive' because they're foundational values before semantic meaning is applied."
            codeExample={[
              {
                label: "Figma Variables",
                code: `bleu-500: #1a70ef
orange-600: #ce4d0e
vert-500: #15ce49
jaune-400: #f5d132
rose-500: #fc72e0`
              }
            ]}
            numberColor="text-bleu-100"
          />

          {/* Step 2: Token Studio */}
          <PipelineStep
            stepNumber={2}
            toolName="Token Studio"
            title="Semantic Mapping"
            description="Primitive tokens are mapped to semantic names based on their purpose, not appearance"
            detailedExplanation="Instead of using 'bleu-500' directly in code, semantic tokens like 'brand-primary' reference primitive values. This means changing the entire brand colour scheme requires only updating the semantic mapping, with no component code changes needed."
            codeExample={[
              {
                label: "Semantic Token Definitions",
                code: `brand-primary: {color.bleu.500}
brand-primary-hover: {color.bleu.600}
brand-secondary: {color.orange.600}
text-primary: {color.slate.900}
surface-background: {color.slate.50}`
              }
            ]}
            transformNote="The {color.bleu.500} syntax references the primitive token, creating a dependency chain."
            numberColor="text-orange-100"
          />

          {/* Step 3: GitHub */}
          <PipelineStep
            stepNumber={3}
            toolName="GitHub"
            title="Version Control"
            description="Token Studio syncs tokens to a GitHub repository"
            detailedExplanation="All design tokens live as JSON files in a centralized repository. This creates a single source of truth that can be shared across projects, versioned, and integrated into CI/CD pipelines. Push and pull changes between Token Studio and GitHub to keep design and code repositories synchronized."
            codeExample={[
              {
                label: "Repository Structure",
                code: `tokens/
  ├── colors.json
  ├── semantic.json
  ├── spacing.json
  ├── typography.json
  └── radius.json`
              },
              {
                label: "Sync Workflow",
                code: `Figma → Token Studio → 
  GitHub Push/Pull → 
  Sync to projects`
              }
            ]}
            numberColor="text-vert-100"
          />

          {/* Step 4: Style Dictionary */}
          <PipelineStep
            stepNumber={4}
            toolName="Style Dictionary"
            title="Transform and Generate"
            description="Style Dictionary transforms JSON tokens into CSS variables, TypeScript types, and other platform formats"
            detailedExplanation="This is where tokens become code. Style Dictionary reads token files and generates CSS custom properties. It resolves semantic token references, turning {color.bleu.500} into the actual hex value #1a70ef."
            codeExample={[
              {
                label: "Generated CSS Variables",
                code: `:root {
  --color-bleu-500: #1a70ef;
  --color-brand-primary: #1a70ef;
  --color-brand-primary-hover: #105ecb;
  --color-text-primary: #0f172a;
  --color-surface-background: #f8fafc;
}`
              }
            ]}
            transformNote="Semantic tokens are resolved to their primitive values during this transformation."
            numberColor="text-rose-100"
          />

          {/* Step 5: Tailwind CSS */}
          <PipelineStep
            stepNumber={5}
            toolName="Tailwind CSS"
            title="Utility Classes"
            description="Tailwind generates utility classes from CSS variables, making tokens accessible as class names"
            detailedExplanation="A custom Tailwind plugin maps CSS variables to utility classes. Instead of writing style={{ backgroundColor: 'var(--color-brand-primary)' }}, use bg-brand-primary. This provides type safety, autocomplete, and Tailwind's responsive and state variants."
            codeExample={[
              {
                label: "Available Classes",
                code: `bg-brand-primary
hover:bg-brand-primary-hover
active:bg-brand-primary-active
text-brand-primary
text-text-primary
text-text-secondary
bg-surface-card
border-border-default`
              }
            ]}
            transformNote="These classes work with Tailwind's variants like hover:, focus:, and responsive breakpoints."
            numberColor="text-jaune-100"
          />

          {/* Step 6: Component */}
          <PipelineStep
            stepNumber={6}
            toolName="Component"
            title="Live Component"
            description="Components use semantic tokens via Tailwind classes, creating a maintainable and consistent design system"
            detailedExplanation="The token reaches a React component. Developers use semantic token classes, so components reflect design updates automatically. When brand colour changes in Figma, every component using bg-brand-primary updates with no code changes required."
            codeExample={[
              {
                label: "React Component",
                code: `<button 
  className="bg-brand-primary 
             hover:bg-brand-primary-hover 
             active:bg-brand-primary-active
             text-text-inverse 
             px-8 py-4 
             font-bold 
             transition-colors">
  View Foundations
</button>`
              }
            ]}
            transformNote="The button below demonstrates this exact component using semantic tokens."
            numberColor="text-bleu-clair-100"
          />
        </div>

        {/* Live Example */}
        <div className="mt-24">
          <div className="bg-surface-elevated p-12">
            <h3 className="text-3xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
              See It In Action
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              This button uses the exact token pipeline we just traced. Every colour, spacing, and typography value comes from the design system tokens.
            </p>
            <div className="flex justify-center mb-8">
              <button className="bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active text-text-inverse px-10 py-5 font-bold text-lg transition-colors">
                View Foundations
              </button>
            </div>
            <div className="bg-white p-6 border border-border-default">
              <pre className="text-sm text-text-secondary font-mono overflow-x-auto">
                <code>{`<button 
  className="bg-brand-primary 
             hover:bg-brand-primary-hover 
             text-text-inverse 
             px-10 py-5">
  View Foundations
</button>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-24">
          <div className="bg-bleu-50 p-12">
            <h3 className="text-3xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
              One Change, Everywhere
            </h3>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            When a designer updates the primary brand colour in Figma, the change flows through the entire pipeline:
            </p>
            <ol className="space-y-3 text-text-secondary text-lg leading-relaxed ml-6">
              <li className="list-decimal"><strong className="text-text-primary">Figma</strong> → Colour variable updated</li>
              <li className="list-decimal"><strong className="text-text-primary">Token Studio</strong> → Semantic token reference resolves to new value</li>
              <li className="list-decimal"><strong className="text-text-primary">GitHub</strong> → Token files updated and committed</li>
              <li className="list-decimal"><strong className="text-text-primary">Style Dictionary</strong> → CSS variables regenerated on next build</li>
              <li className="list-decimal"><strong className="text-text-primary">Tailwind</strong> → Utility classes reflect new values</li>
              <li className="list-decimal"><strong className="text-text-primary">Components</strong> → Every button, card, and element using <code className="bg-surface-card px-2 py-1 text-sm font-mono">bg-brand-primary</code> updates—no code changes required</li>
            </ol>
            <p className="text-text-secondary text-lg leading-relaxed mt-8">
              No component code changes. No manual CSS updates. Design-driven, token-powered consistency across the system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
