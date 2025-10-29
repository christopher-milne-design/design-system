import { 
  Card, 
  CardImage, 
  CardBadges, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardStat
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Plus } from "lucide-react"

export function CardExamples() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-12 tracking-tight">
        Card Examples
      </h2>
      
      {/* Stat Cards */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-slate-700 mb-6">Stat Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardStat 
              value="$308.8M" 
              label="in grants and funding initiatives in 2023-24"
              icon={<Sprout className="w-8 h-8" />}
            />
          </Card>
          
          <Card>
            <CardStat 
              value="5,910" 
              label="Artists, groups and organizations supported in 2023-24"
              icon={<Plus className="w-8 h-8" />}
            />
          </Card>
        </div>
      </section>

      {/* Project Cards */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-slate-700 mb-6">Project Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop" 
              alt="Alberta Focus Initiative"
              aspectRatio="video"
            />
            <CardContent className="space-y-4">
              <CardTitle>Alberta Focus Initiative</CardTitle>
              <CardDescription>
                This focused initiative aims to strengthen engagement and collaboration with Alberta&apos;s vibrant arts community.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=450&fit=crop" 
              alt="International Project Incubator"
              aspectRatio="video"
            />
            <CardContent className="space-y-4">
              <CardTitle>International Project Incubator hosted by CITF</CardTitle>
              <CardDescription>
                An initiative to support multilateral theatre creation and circulation projects at the heart of the Francophonie.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop" 
              alt="Canada-Korea Connections"
              aspectRatio="video"
            />
            <CardContent className="space-y-4">
              <CardTitle>Canada-Korea Connections</CardTitle>
              <CardDescription>
                Focused on connections that will deepen and diversify creative, collaborative relationships between Korean artists and artists from Canada.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News/Article Cards with Badges */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-slate-700 mb-6">Article Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=450&fit=crop" 
              alt="Finding Community at the CITF Incubator"
              aspectRatio="video"
            />
            <CardHeader>
              <CardBadges>
                <Badge variant="outline" className="bg-bleu-50 text-bleu-700 border-bleu-200">Francophonie</Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">International</Badge>
              </CardBadges>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardTitle>Finding Community at the CITF Incubator</CardTitle>
              <CardDescription>
                Siona Gareau-Brennan finds artistic connection, inspiration and belonging at CITF&apos;s international incubator in Marseille.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=450&fit=crop" 
              alt="Homesick: A Sonic Return Home"
              aspectRatio="video"
            />
            <CardHeader>
              <CardBadges>
                <Badge variant="outline" className="bg-vert-50 text-vert-700 border-vert-200">Artist Stories</Badge>
                <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">Funding</Badge>
              </CardBadges>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardTitle>Homesick: A Sonic Return Home</CardTitle>
              <CardDescription>
                JUNO winner Ciel talks about the impact of Council funding on her journey from blueprint to breakthrough.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=450&fit=crop" 
              alt="The Arts Can Shape the Future of Canada"
              aspectRatio="video"
            />
            <CardHeader>
              <CardBadges>
                <Badge variant="outline" className="bg-jaune-50 text-jaune-700 border-jaune-200">Announcements</Badge>
              </CardBadges>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardTitle>The Arts Can Shape the Future of Canada</CardTitle>
              <CardDescription>
                Canada Council Director and CEO describes how the arts can do what no other sector can to shape the future of Canada.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Funding Results Cards with Illustration */}
      <section>
        <h3 className="text-2xl font-semibold text-slate-700 mb-6">Results Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=600&fit=crop" 
              alt="Arts Across Canada Funding Results"
              aspectRatio="square"
            />
            <CardContent className="space-y-4">
              <CardTitle>Arts Across Canada Funding Results, 2024-25</CardTitle>
              <CardDescription>
                Of the 751 applications assessed by 50 peer assessors, 250 were successful totalling $9.6 M (33.3% success rate).
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=600&fit=crop" 
              alt="Research Impact"
              aspectRatio="square"
            />
            <CardContent className="space-y-4">
              <CardTitle>Impact of the Research and Creation Components</CardTitle>
              <CardDescription>
                Funded projects will enhance access to the arts and drive artistic growth.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardImage 
              src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=600&h=600&fit=crop" 
              alt="Digital Now Initiative"
              aspectRatio="square"
            />
            <CardContent className="space-y-4">
              <CardTitle>Impact of the Digital Now Initiative, 2021-25</CardTitle>
              <CardDescription>
                Funded projects supported more than 53K artists engaging audiences across Canada.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
