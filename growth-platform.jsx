import React, { useState, useEffect } from 'react';
import { Zap, BarChart3, Brain, Sparkles, Users, TrendingUp, Lock, Check, Menu, X, LogOut, Settings, DollarSign } from 'lucide-react';

export default function GrowthPlatform() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('youtube');
  const [contentIdea, setContentIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  // API Call to Claude for Content Generation
  const generateContentWithAI = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          messages: [
            {
              role: 'user',
              content: `Tu ek ${selectedPlatform} content expert hai. Mujhe ${selectedPlatform} ke liye viral content strategy banani hai.

Topic: ${contentIdea || 'General Growth'}
Platform: ${selectedPlatform}

Mujhe 5 minute mein jo content ideas chahiye (hindi/urdu mein):
1. Script idea (hooks + main content + CTA)
2. Hashtag strategy (trending 10 hashtags)
3. Best posting time
4. Thumbnail/Cover suggestion
5. Call-to-action strategy

Sab kuch ache tarah se format karke dena aur simple language mein.`
            }
          ]
        })
      });

      const data = await response.json();
      const contentText = data.content[0].text;
      setGeneratedContent(contentText);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedContent('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const Login = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          {/* Logo & Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                GrowthAI
              </h1>
            </div>
            <p className="text-gray-400 text-lg font-light">10x Faster Growth with AI Power</p>
          </div>

          {/* Login Card */}
          <div className="bg-[#1a1a2e] border border-purple-500/30 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            <h2 className="text-white text-2xl font-bold mb-6">Welcome Back</h2>
            
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
              Don't have account? <span className="text-purple-400 cursor-pointer hover:text-pink-400">Create one</span>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-12 space-y-3">
            {['🚀 AI-Powered Content Ideas', '💰 Only $10/month', '⚡ Real-time Analytics', '🎯 Multi-Platform Support'].map((feature, i) => (
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
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Welcome back! 🎉</p>
        </div>
        <div className="flex gap-4">
          <button className="p-3 bg-[#1a1a2e] border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition">
            <Settings className="w-6 h-6" />
          </button>
          <button onClick={() => setIsLoggedIn(false)} className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: Users, label: 'Total Followers', value: '12,450', change: '+245%' },
          { icon: TrendingUp, label: 'Avg Engagement', value: '8.4%', change: '+3.2%' },
          { icon: BarChart3, label: 'Views This Month', value: '45.2K', change: '+521%' },
          { icon: Zap, label: 'AI Credits Used', value: '342/1000', change: '34% Used' }
        ].map((stat, i) => (
          <div key={i} className="bg-[#1a1a2e] border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/40 transition">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-green-400 text-sm font-bold">{stat.change}</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Generator */}
        <div className="lg:col-span-2 bg-[#1a1a2e] border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            AI Content Generator
          </h2>

          {/* Platform Selector */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm mb-3 block">Select Platform</label>
            <div className="grid grid-cols-3 gap-3">
              {['youtube', 'instagram', 'tiktok'].map(platform => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`py-3 px-4 rounded-lg font-bold transition capitalize ${
                    selectedPlatform === platform
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-[#0f0f0f] text-gray-400 hover:border-purple-500/50 border border-gray-700'
                  }`}
                >
                  {platform === 'youtube' ? '▶️ YouTube' : platform === 'instagram' ? '📸 Instagram' : '🎵 TikTok'}
                </button>
              ))}
            </div>
          </div>

          {/* Content Idea Input */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm mb-3 block">What's Your Content Topic?</label>
            <textarea
              value={contentIdea}
              onChange={(e) => setContentIdea(e.target.value)}
              placeholder={`e.g., "Tech tutorials", "Daily motivation", "Cooking tips"...`}
              className="w-full bg-[#0f0f0f] text-white px-4 py-4 rounded-lg border border-purple-500/20 focus:border-purple-500 outline-none resize-none"
              rows="3"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generateContentWithAI}
            disabled={loading || !contentIdea.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="animate-spin">⚡</div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate with AI
              </>
            )}
          </button>

          {/* Generated Content Display */}
          {generatedContent && (
            <div className="mt-8 bg-[#0f0f0f] border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Generated Content Strategy:</h3>
              <div className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed max-h-96 overflow-y-auto">
                {generatedContent}
              </div>
              <button className="mt-4 w-full bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 font-bold py-2 rounded-lg transition">
                📋 Copy Content
              </button>
            </div>
          )}
        </div>

        {/* Subscription Card */}
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-2xl p-8 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold">Premium Plan</h3>
          </div>

          <div className="mb-8">
            <p className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
              $10
            </p>
            <p className="text-gray-400">per month</p>
          </div>

          <div className="space-y-4 mb-8">
            {[
              'Unlimited AI Content Ideas',
              'Real-time Analytics Dashboard',
              '3 Platform Support',
              'Hashtag & Trend Research',
              'Posting Schedule Manager',
              'Monthly Strategy Reports',
              '24/7 Priority Support'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {subscription ? (
            <button className="w-full bg-green-500/20 border border-green-500/50 text-green-300 font-bold py-3 rounded-lg">
              ✓ Active Subscription
            </button>
          ) : (
            <button
              onClick={() => setShowPayment(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              Subscribe Now
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {!isLoggedIn ? <Login /> : <Dashboard />}
    </div>
  );
}
