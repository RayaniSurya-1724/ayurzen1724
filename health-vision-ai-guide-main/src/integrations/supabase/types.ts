export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          achievement_name: string
          achievement_type: string
          description: string | null
          id: string
          points_reward: number | null
          unlocked_at: string
          user_id: string
        }
        Insert: {
          achievement_name: string
          achievement_type: string
          description?: string | null
          id?: string
          points_reward?: number | null
          unlocked_at?: string
          user_id: string
        }
        Update: {
          achievement_name?: string
          achievement_type?: string
          description?: string | null
          id?: string
          points_reward?: number | null
          unlocked_at?: string
          user_id?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          added_at: string
          id: string
          product_id: string
          quantity: number
          user_id: string
        }
        Insert: {
          added_at?: string
          id?: string
          product_id: string
          quantity?: number
          user_id: string
        }
        Update: {
          added_at?: string
          id?: string
          product_id?: string
          quantity?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      consultations: {
        Row: {
          consultation_type: string
          created_at: string
          doctor_id: string
          doctor_name: string
          id: string
          meeting_id: string | null
          meeting_link: string | null
          patient_email: string
          patient_name: string
          patient_phone: string
          preferred_date: string
          preferred_time: string | null
          status: string
          symptoms: string | null
          total_amount: number
          updated_at: string
          user_id: string
        }
        Insert: {
          consultation_type?: string
          created_at?: string
          doctor_id: string
          doctor_name: string
          id?: string
          meeting_id?: string | null
          meeting_link?: string | null
          patient_email: string
          patient_name: string
          patient_phone: string
          preferred_date: string
          preferred_time?: string | null
          status?: string
          symptoms?: string | null
          total_amount: number
          updated_at?: string
          user_id: string
        }
        Update: {
          consultation_type?: string
          created_at?: string
          doctor_id?: string
          doctor_name?: string
          id?: string
          meeting_id?: string | null
          meeting_link?: string | null
          patient_email?: string
          patient_name?: string
          patient_phone?: string
          preferred_date?: string
          preferred_time?: string | null
          status?: string
          symptoms?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      daily_claims: {
        Row: {
          bonus_multiplier: number | null
          claim_date: string
          claimed_at: string
          id: string
          points_claimed: number
          streak_days: number
          user_id: string
        }
        Insert: {
          bonus_multiplier?: number | null
          claim_date?: string
          claimed_at?: string
          id?: string
          points_claimed?: number
          streak_days?: number
          user_id: string
        }
        Update: {
          bonus_multiplier?: number | null
          claim_date?: string
          claimed_at?: string
          id?: string
          points_claimed?: number
          streak_days?: number
          user_id?: string
        }
        Relationships: []
      }
      health_alerts: {
        Row: {
          category: string
          created_at: string
          id: string
          is_read: boolean
          message: string
          severity: string
          title: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          severity: string
          title: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          severity?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      health_analyses: {
        Row: {
          analysis_type: string
          created_at: string
          id: string
          input_data: Json
          result_data: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          analysis_type: string
          created_at?: string
          id?: string
          input_data: Json
          result_data: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          analysis_type?: string
          created_at?: string
          id?: string
          input_data?: Json
          result_data?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          price: number
          product_id: string
          quantity: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          price: number
          product_id: string
          quantity: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          price?: number
          product_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          id: string
          payment_id: string | null
          payment_status: string | null
          shipping_address: Json | null
          status: string
          total_amount: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          payment_id?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          status?: string
          total_amount: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          payment_id?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          status?: string
          total_amount?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      prakriti_results: {
        Row: {
          completed_at: string
          created_at: string
          dominant_dosha: string
          id: string
          kapha_score: number
          pitta_score: number
          recommendations: Json | null
          test_answers: Json
          updated_at: string
          user_id: string
          vata_score: number
        }
        Insert: {
          completed_at?: string
          created_at?: string
          dominant_dosha: string
          id?: string
          kapha_score?: number
          pitta_score?: number
          recommendations?: Json | null
          test_answers?: Json
          updated_at?: string
          user_id: string
          vata_score?: number
        }
        Update: {
          completed_at?: string
          created_at?: string
          dominant_dosha?: string
          id?: string
          kapha_score?: number
          pitta_score?: number
          recommendations?: Json | null
          test_answers?: Json
          updated_at?: string
          user_id?: string
          vata_score?: number
        }
        Relationships: []
      }
      products: {
        Row: {
          benefits: string[] | null
          category: string
          created_at: string
          description: string
          id: string
          image_alt: string | null
          image_url: string | null
          in_stock: boolean
          name: string
          original_price: number | null
          price: number
          rating: number | null
          reviews_count: number | null
          stock_quantity: number | null
          updated_at: string
        }
        Insert: {
          benefits?: string[] | null
          category: string
          created_at?: string
          description: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          in_stock?: boolean
          name: string
          original_price?: number | null
          price: number
          rating?: number | null
          reviews_count?: number | null
          stock_quantity?: number | null
          updated_at?: string
        }
        Update: {
          benefits?: string[] | null
          category?: string
          created_at?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          in_stock?: boolean
          name?: string
          original_price?: number | null
          price?: number
          rating?: number | null
          reviews_count?: number | null
          stock_quantity?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_activities: {
        Row: {
          activity_data: Json | null
          activity_type: string
          completed_at: string
          created_at: string
          id: string
          points_earned: number | null
          streak_count: number | null
          user_id: string
        }
        Insert: {
          activity_data?: Json | null
          activity_type: string
          completed_at?: string
          created_at?: string
          id?: string
          points_earned?: number | null
          streak_count?: number | null
          user_id: string
        }
        Update: {
          activity_data?: Json | null
          activity_type?: string
          completed_at?: string
          created_at?: string
          id?: string
          points_earned?: number | null
          streak_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_stats: {
        Row: {
          created_at: string
          current_level: number
          daily_streak: number
          last_activity_at: string | null
          longest_streak: number
          total_analyses: number
          total_points: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_level?: number
          daily_streak?: number
          last_activity_at?: string | null
          longest_streak?: number
          total_analyses?: number
          total_points?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_level?: number
          daily_streak?: number
          last_activity_at?: string | null
          longest_streak?: number
          total_analyses?: number
          total_points?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
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
