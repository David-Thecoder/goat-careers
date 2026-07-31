export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          legend_id: string
          title: string
          updated_at: string
          year: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          legend_id: string
          title: string
          updated_at?: string
          year?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          legend_id?: string
          title?: string
          updated_at?: string
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "achievements_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
        ]
      }
      chapters: {
        Row: {
          beats: Json
          body: string | null
          cover_image_url: string | null
          created_at: string
          era_end: number | null
          era_start: number | null
          id: string
          legend_id: string
          period: string | null
          slug: string
          sort_order: number
          summary: string | null
          title: string
          tone: string | null
          updated_at: string
        }
        Insert: {
          beats?: Json
          body?: string | null
          cover_image_url?: string | null
          created_at?: string
          era_end?: number | null
          era_start?: number | null
          id?: string
          legend_id: string
          period?: string | null
          slug: string
          sort_order?: number
          summary?: string | null
          title: string
          tone?: string | null
          updated_at?: string
        }
        Update: {
          beats?: Json
          body?: string | null
          cover_image_url?: string | null
          created_at?: string
          era_end?: number | null
          era_start?: number | null
          id?: string
          legend_id?: string
          period?: string | null
          slug?: string
          sort_order?: number
          summary?: string | null
          title?: string
          tone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapters_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
        ]
      }
      legendary_moments: {
        Row: {
          chapter_id: string | null
          context: string | null
          created_at: string
          description: string | null
          happened_at: string | null
          id: string
          legend_id: string
          media_url: string | null
          slug: string
          sort_order: number
          title: string
          updated_at: string
          why_it_matters: string | null
          year: number | null
        }
        Insert: {
          chapter_id?: string | null
          context?: string | null
          created_at?: string
          description?: string | null
          happened_at?: string | null
          id?: string
          legend_id: string
          media_url?: string | null
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
          why_it_matters?: string | null
          year?: number | null
        }
        Update: {
          chapter_id?: string | null
          context?: string | null
          created_at?: string
          description?: string | null
          happened_at?: string | null
          id?: string
          legend_id?: string
          media_url?: string | null
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
          why_it_matters?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "legendary_moments_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legendary_moments_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
        ]
      }
      legends: {
        Row: {
          birth_date: string | null
          cover_image_url: string | null
          created_at: string
          discovery: Json
          era: string | null
          hero: Json
          hero_quote: string | null
          id: string
          legacy: Json
          name: string
          nationality: string | null
          passport_template: Json
          portrait_image_url: string | null
          primary_color: string | null
          secondary_color: string | null
          short_bio: string | null
          short_name: string
          slug: string
          sport_dna: Json
          sport_id: string | null
          stats: Json
          status: string
          theme: Json
          title: string | null
          updated_at: string
        }
        Insert: {
          birth_date?: string | null
          cover_image_url?: string | null
          created_at?: string
          discovery?: Json
          era?: string | null
          hero?: Json
          hero_quote?: string | null
          id?: string
          legacy?: Json
          name: string
          nationality?: string | null
          passport_template?: Json
          portrait_image_url?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          short_bio?: string | null
          short_name: string
          slug: string
          sport_dna?: Json
          sport_id?: string | null
          stats?: Json
          status?: string
          theme?: Json
          title?: string | null
          updated_at?: string
        }
        Update: {
          birth_date?: string | null
          cover_image_url?: string | null
          created_at?: string
          discovery?: Json
          era?: string | null
          hero?: Json
          hero_quote?: string | null
          id?: string
          legacy?: Json
          name?: string
          nationality?: string | null
          passport_template?: Json
          portrait_image_url?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          short_bio?: string | null
          short_name?: string
          slug?: string
          sport_dna?: Json
          sport_id?: string | null
          stats?: Json
          status?: string
          theme?: Json
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "legends_sport_id_fkey"
            columns: ["sport_id"]
            isOneToOne: false
            referencedRelation: "sports"
            referencedColumns: ["id"]
          },
        ]
      }
      quotes: {
        Row: {
          context: string | null
          created_at: string
          id: string
          legend_id: string | null
          quote: string
          source_url: string | null
          speaker: string | null
          updated_at: string
        }
        Insert: {
          context?: string | null
          created_at?: string
          id?: string
          legend_id?: string | null
          quote: string
          source_url?: string | null
          speaker?: string | null
          updated_at?: string
        }
        Update: {
          context?: string | null
          created_at?: string
          id?: string
          legend_id?: string | null
          quote?: string
          source_url?: string | null
          speaker?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "quotes_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
        ]
      }
      relationships: {
        Row: {
          created_at: string
          description: string | null
          id: string
          relationship_type: string
          source_legend_id: string
          strength: number
          target_legend_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          relationship_type: string
          source_legend_id: string
          strength?: number
          target_legend_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          relationship_type?: string
          source_legend_id?: string
          strength?: number
          target_legend_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "relationships_source_legend_id_fkey"
            columns: ["source_legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relationships_target_legend_id_fkey"
            columns: ["target_legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
        ]
      }
      sources: {
        Row: {
          created_at: string
          id: string
          legend_id: string | null
          notes: string | null
          source_type: string | null
          title: string
          updated_at: string
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          legend_id?: string | null
          notes?: string | null
          source_type?: string | null
          title: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          legend_id?: string | null
          notes?: string | null
          source_type?: string | null
          title?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sources_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
        ]
      }
      sports: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      timeline_events: {
        Row: {
          created_at: string
          description: string | null
          era: string | null
          event_date: string | null
          event_type: string | null
          event_year: number
          id: string
          image_url: string | null
          importance: number
          legend_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          era?: string | null
          event_date?: string | null
          event_type?: string | null
          event_year: number
          id?: string
          image_url?: string | null
          importance?: number
          legend_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          era?: string | null
          event_date?: string | null
          event_type?: string | null
          event_year?: number
          id?: string
          image_url?: string | null
          importance?: number
          legend_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "timeline_events_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
        ]
      }
      user_favorites: {
        Row: {
          created_at: string
          id: string
          legend_id: string | null
          moment_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          legend_id?: string | null
          moment_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          legend_id?: string | null
          moment_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_favorites_moment_id_fkey"
            columns: ["moment_id"]
            isOneToOne: false
            referencedRelation: "legendary_moments"
            referencedColumns: ["id"]
          },
        ]
      }
      user_passports: {
        Row: {
          created_at: string
          id: string
          last_active_at: string | null
          legends_discovered: number
          moments_viewed: number
          relationships_explored: number
          sports_unlocked: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_active_at?: string | null
          legends_discovered?: number
          moments_viewed?: number
          relationships_explored?: number
          sports_unlocked?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_active_at?: string | null
          legends_discovered?: number
          moments_viewed?: number
          relationships_explored?: number
          sports_unlocked?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          chapter_id: string | null
          completed_at: string
          created_at: string
          id: string
          legend_id: string | null
          moment_id: string | null
          progress_type: string
          user_id: string
        }
        Insert: {
          chapter_id?: string | null
          completed_at?: string
          created_at?: string
          id?: string
          legend_id?: string | null
          moment_id?: string | null
          progress_type: string
          user_id: string
        }
        Update: {
          chapter_id?: string | null
          completed_at?: string
          created_at?: string
          id?: string
          legend_id?: string | null
          moment_id?: string | null
          progress_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_legend_id_fkey"
            columns: ["legend_id"]
            isOneToOne: false
            referencedRelation: "legends"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_moment_id_fkey"
            columns: ["moment_id"]
            isOneToOne: false
            referencedRelation: "legendary_moments"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

