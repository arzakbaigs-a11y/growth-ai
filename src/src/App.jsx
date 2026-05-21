import React, { useState } from 'react';
import { Zap, BarChart3, Brain, Sparkles, Users, TrendingUp, Lock, Check, LogOut, Settings, Linkedin, Shield, BookOpen } from 'lucide-react';

export default function GrowthAIPro() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [activeTab, setActiveTab] = useState('youtube');
  const [contentIdea, setContentIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const generateContentWithAI = async (platform) => {
    setLoading(true);
    try {
      let prompt = '';

      if (platform === 'youtube') {
        prompt = `Tu ek YouTube viral content expert hai. Topic: "${contentIdea}"

Bilkul Hindi/Urdu mein dena:
1. Hook (First 3 seconds - sabse important!)
   - Exact wording kya bolun?
   
2. Content Structure (5 segments)
   - Segment 1 (Intro + hook detail)
   - Segment 2 (Problem explain)
   - Segment 3 (Solution intro)
   - Segment 4 (Step-by-step)
   - Segment 5 (CTA + subscribe)

3. Keyword Research (10 trending keywords)
   - Main keywords jo log YouTube par search karte hain
   
4. Thumbnail Ideas (3 designs)
   - Bilkul detailed description
   
5. Title Variations (5 options)
   - Har title unique hook ke sath
   
6. Description Template
   - Exact likho jo YouTube description mein paste karo

7. Hashtag Strategy
   - 15 relevant hashtags

8. Best Posting Times
   - Exact time + day

Sab detailed aur actionable hona!`;

      } else if (platform === 'instagram') {
        prompt = `Tu Instagram Reels expert hai. Topic: "${contentIdea}"

Hindi/Urdu mein detailed guide:
1. Reel Concept (3 unique ideas)
   - Hook variation
   - Content flow
   - CTA

2. Hook Variations (5 different approaches)
   - First 1 second mein kya dikhau?

3. Text Overlay Strategy
   - Har frame par kya text likho?
   - Font size, color suggestions

4. Music Selection
   - Trending music search terms
   - Timing suggestions

5. Caption Copywriting (3 variations)
   - Engaging captions jo comments generate kare

6. Hashtag Strategy
   - Big hashtags (100k+)
   - Medium hashtags (10k-100k)
   - Small hashtags (1k-10k)
   
7. CTA Strategy
   - Best call-to-actions

8. Engagement Boosters
   - Tips kya karo reels ko viral karne ke liye

Practical aur immediately implementable!`;

      } else if (platform === 'tiktok') {
        prompt = `Tu TikTok viral content creator ho. Topic: "${contentIdea}"

Bilkul simple Hindi/Urdu mein:
1. Hook Strategy (0-1 second)
   - Exact kya dikhau pehle second mein?

2. Content Flow (4 Acts)
   - Act 1 (Hook - curiosity)
   - Act 2 (Problem - relatable)
   - Act 3 (Solution - value)
   - Act 4 (CTA - action)

3. Sound Selection Guide
   - Trending sounds search terms
   - Timing breakdown

4. Caption (Text on screen)
   - Exact wording for maximum engagement

5. Trending Hashtags (10)
   - Currently trending on TikTok

6. Video Effects
   - Which effects lagana chahiye

7. Cross-Platform Strategy
   - Isko Instagram, YouTube mein bhi upload kaise karo

8. Growth Hacks (5)
   - Exactly kya karo viral hone ke liye

Sab immediately action-able!`;

      } else if (platform === 'linkedin') {
        prompt = `Tu LinkedIn personal branding expert hai. Topic/Niche: "${contentIdea}"

Professional Hindi/Urdu guide:
1. Profile Optimization
   - Headline likho (with keywords)
   - Summary template (with keywords)
   - Profile strength tips

2. Job Search Keywords
   - 10 exact keywords jo recruiters search karte hain
   - Job titles relevant to your niche

3. Content Pillars (5 main topics)
   - Har week kya post karo?

4. Job/Project Showcase Strategy
   - Existing projects ko kaise showcase karo
   - Future projects ke liye kya likho

5. Engagement Formula
   - Best time to post
   - Post length
   - Content structure

6. Network Building
   - Month 1 action (connect kise?)
   - Month 2 action (engage kaise?)
   - Month 3 action (results?)

7. LinkedIn SEO
   - Keywords kahan likho
   - Headline optimization
   - Summary optimization

8. Content Calendar (4 weeks)
   - Daily posting schedule

Practical career growth strategy!`;

      } else if (platform === 'copywrite') {
        prompt = `Tu expert copywriter ho jo plagiarism avoid karta hai. Topic: "${contentIdea}"

Hindi/Urdu mein complete guide:
1. Copywriting Formula (not copied!)
   - Structure jo tu use kar sakta hai
   - Example dena

2. Personal Voice Development
   - Tere voice ko kaise unique banau?
   - Tips kya hain?

3. Unique Angle Finder
   - "${contentIdea}" ke liye 3 unique angles
   - Har angle alag perspective se

4. Paraphrasing Techniques (5)
   - Technique 1 (structure change)
   - Technique 2 (examples add)
   - Technique 3 (reaction add)
   - Technique 4 (question form)
   - Technique 5 (personal story)

5. Original Examples (3)
   - Exact likho jo tu use kar sakta hai
   - Bilkul original

6. Plagiarism Checker Tools
   - Free tools list

7. Attribution Methods
   - Jab others' ideas use karo toh kaise credit do?

8. Personal Brand Voice Guide
   - Tere brand ka voice kya hona chahiye?

Complete original content strategy!`;

      } else if (platform === 'seo') {
        prompt = `Tu SEO expert ho sab platforms ke liye. Topic: "${contentIdea}"

Hindi/Urdu mein complete SEO strategy:
1. Keyword Research
   - Primary keyword
   - Long-tail keywords (5)
   - Search volume estimates
   - Competition level

2. Title Optimization
   - YouTube title
   - Instagram caption title
   - TikTok caption
   - LinkedIn post title

3. Description Optimization
   - Har platform ke liye optimized description
   - Keywords naturally include karo

4. Hashtag Research
   - Big hashtags (100k+)
   - Medium hashtags (10k-100k)
   - Small hashtags (1k-10k)
   - Hashtag combination strategy

5. Metadata Optimization
   - Tags kya likho?
   - Alt text kya likho?

6. Thumbnail Optimization (YouTube)
   - Design suggestions
   - Text size aur color

7. Algorithm Understanding
   - YouTube algorithm kya dekhai?
   - Instagram algorithm kya dekhai?
   - TikTok algorithm kya dekhai?
   - LinkedIn algorithm kya dekhai?

8. Ranking Strategies
   - Content series strategy
   - Comparison post strategy
   - Data-backed claims strategy
   - Question-answer strategy

Complete multi-platform SEO guide!`;
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2500,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      const data = await response.json();
      setGeneratedContent(data.content[0].text);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedContent('❌ Connection error. Please try again or check internet.');
    }
    setLoading(false);
  };

  const Login = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                GrowthAI Pro
              </h1>
            </div>
            <p className="text-gray-400 text-lg font-light">All-in-One Creator Growth Platform</p>
          </div>

          <div className="bg-[#1a1a2e] border border-purple-500/30 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            <h2 className="text-white text-2xl font-bold mb-6">Welcome</h2>
            
            <div className="space-y-4 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full bg-[#0f0f0f] text-white px-4 py-3 rounded-lg border border-purple-500/20 focus:border-purple-500 outline-none transition"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#0f0f0f] text-white px-4 py-3 rounded-lg border border-purple-500/20 focus:border-purple-500 outline-none transition"
              />
            </div>

            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
            >
              Sign In
            </button>

            <div className="text-center mt-4 text-gray-400">
              Don't have account? <span className="text-purple-400 cursor-pointer">Create one</span>
            </div>
          </div>

          <div className="mt-12 space-y-3">
            {[
              '🚀 YouTube, Instagram, TikTok',
              '💼 LinkedIn Job & Project Growth',
              '📝 AI Copywrite (No Plagiarism)',
              '🔍 SEO Optimization Tools',
              '💰 Only $10/month'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-purple-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          GrowthAI Pro
        </h1>
        <button onClick={() => setIsLoggedIn(false)} className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition">
          <LogOut className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { id: 'youtube', label: '▶️ YouTube', icon: Zap },
          { id: 'instagram', label: '📸 Instagram', icon: TrendingUp },
          { id: 'tiktok', label: '🎵 TikTok', icon: Brain },
          { id: 'linkedin', label: '💼 LinkedIn', icon: Linkedin },
          { id: 'copywrite', label: '📝 Copywrite', icon: BookOpen },
          { id: 'seo', label: '🔍 SEO', icon: Shield }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setGeneratedContent(null); }}
            className={`px-4 md:px-6 py-3 rounded-lg font-bold transition whitespace-nowrap text-sm md:text-base ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-[#1a1a2e] text-gray-400 hover:text-white border border-purple-500/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#1a1a2e] border border-purple-500/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
            <Brain className="w-6 md:w-8 h-6 md:h-8 text-purple-400 flex-shrink-0" />
            <span>
              {activeTab === 'youtube' && 'YouTube Content Genius'}
              {activeTab === 'instagram' && 'Instagram Reels Master'}
              {activeTab === 'tiktok' && 'TikTok Viral Creator'}
              {activeTab === 'linkedin' && 'LinkedIn Growth Hub'}
              {activeTab === 'copywrite' && 'Copywrite Generator'}
              {activeTab === 'seo' && 'SEO Optimizer'}
            </span>
          </h2>

          {/* Info Box */}
          {activeTab === 'linkedin' && (
            <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-blue-300 text-sm">💼 Get jobs, showcase projects, build network at scale</p>
            </div>
          )}
          {activeTab === 'copywrite' && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-300 text-sm">✍️ Original content with zero plagiarism - learn copywriting!</p>
            </div>
          )}
          {activeTab === 'seo' && (
            <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-300 text-sm">🔍 Rank higher on all platforms with SEO strategies</p>
            </div>
          )}

          {/* Input Section */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm mb-3 block font-semibold">
              {activeTab === 'linkedin' ? 'Your Niche/Job Title' : 
               activeTab === 'seo' ? 'Topic to Optimize' :
               'Content Topic/Idea'}
            </label>
            <textarea
              value={contentIdea}
              onChange={(e) => setContentIdea(e.target.value)}
              placeholder={
                activeTab === 'linkedin' ? 'e.g., "Software Engineer", "Digital Marketing"' :
                activeTab === 'copywrite' ? 'e.g., "Product Review", "Self-Improvement Tips"' :
                activeTab === 'seo' ? 'e.g., "AI Tools Tutorial", "Fashion Tips"' :
                'Enter your content topic here...'
              }
              className="w-full bg-[#0f0f0f] text-white px-4 py-4 rounded-lg border border-purple-500/20 focus:border-purple-500 outline-none resize-none text-sm md:text-base"
              rows="4"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={() => generateContentWithAI(activeTab)}
            disabled={loading || !contentIdea.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm md:text-base"
          >
            {loading ? (
              <>
                <div className="animate-spin">⚡</div>
                Generating (10-15 sec)...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Get {activeTab === 'linkedin' ? 'Strategy' : activeTab === 'copywrite' ? 'Content' : activeTab === 'seo' ? 'SEO Plan' : 'Ideas'}
              </>
            )}
          </button>

          {/* Result Display */}
          {generatedContent && (
            <div className="mt-8 bg-[#0f0f0f] border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">✨ Generated:</h3>
              <div className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed max-h-96 overflow-y-auto">
                {generatedContent}
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(generatedContent);
                  alert('Copied to clipboard! ✓');
                }}
                className="mt-4 w-full bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 font-bold py-2 rounded-lg transition"
              >
                📋 Copy to Clipboard
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Premium Card */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">$10</p>
            <p className="text-gray-400 mb-6">per month</p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition">
              Subscribe Now
            </button>
          </div>

          {/* Features */}
          <div className="bg-[#1a1a2e] border border-purple-500/30 rounded-2xl p-6">
            <h3 className="font-bold mb-4">✨ All Included</h3>
            <div className="space-y-2 text-sm">
              {['🚀 YouTube', '📸 Instagram', '🎵 TikTok', '💼 LinkedIn', '📝 No Plagiarism', '🔍 SEO', '⚡ Unlimited', '📊 Analytics'].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-[#1a1a2e] border border-purple-500/30 rounded-2xl p-6">
            <h3 className="font-bold mb-3">💡 Pro Tips</h3>
            <ul className="space-y-1 text-xs text-gray-300">
              <li>📺 YouTube: First 3 seconds</li>
              <li>🎬 TikTok: First 1 second</li>
              <li>📱 Instagram: Saves = growth</li>
              <li>💼 LinkedIn: Value first</li>
              <li>✍️ Copy: Your voice</li>
              <li>🔍 SEO: Keywords matter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      {!isLoggedIn ? <Login /> : <Dashboard />}
    </div>
  );
}
