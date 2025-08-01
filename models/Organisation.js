import mongoose from 'mongoose';

const organisationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  billingEmail: String,
  logo: String,
  subscription: {
    plan: String,
    status: String,
    stripeCustomerId: String,
    stripeSubscriptionId: String,
    currentPeriodEnd: Date,
    tier: {
      type: String,
      enum: ["free", "solo", "crew", "fleet"],
      default: "free",
    },
    jobsRemaining: {
      type: Number,
      default: 0,
    },
    usersRemaining: {
      type: Number,
      default: 0,
    },
    lastQuotaResetDate: {
      type: Date,
      default: null,
    },
    creditsRemaining: {
      type: Number,
      default: 500,
    },
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },
  abn: String,
  licenseNumber: String,
  email: String,
  phone: String,
  website: String,
  quoteTermsAndConditions: String,
  quotePaymentTerms: String,
  defaultTemplate: String,
  invoiceTermsAndConditions: String,
  invoicePaymentTerms: String,
  defaultInvoiceTemplate: String,
  jobSignSettings: {
    questionSets: [{
      name: { type: String, required: true },
      description: String,
      questions: [{
        question: { type: String, required: true },
        type: { type: String, enum: ['text', 'yes_no', 'multiple_choice'], default: 'text' },
        options: [String],
        order: { type: Number, default: 0 }
      }],
      isDefault: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
    }],
    defaultQuestionSetId: { type: mongoose.Schema.Types.ObjectId }
  },
  calendarSettings: {
    businessHours: {
      monday: { enabled: { type: Boolean, default: true }, start: { type: String, default: '09:00' }, end: { type: String, default: '17:00' } },
      tuesday: { enabled: { type: Boolean, default: true }, start: { type: String, default: '09:00' }, end: { type: String, default: '17:00' } },
      wednesday: { enabled: { type: Boolean, default: true }, start: { type: String, default: '09:00' }, end: { type: String, default: '17:00' } },
      thursday: { enabled: { type: Boolean, default: true }, start: { type: String, default: '09:00' }, end: { type: String, default: '17:00' } },
      friday: { enabled: { type: Boolean, default: true }, start: { type: String, default: '09:00' }, end: { type: String, default: '17:00' } },
      saturday: { enabled: { type: Boolean, default: false }, start: { type: String, default: '09:00' }, end: { type: String, default: '17:00' } },
      sunday: { enabled: { type: Boolean, default: false }, start: { type: String, default: '09:00' }, end: { type: String, default: '17:00' } }
    },
    slotMinTime: { type: String, default: '08:00' },
    slotMaxTime: { type: String, default: '18:00' }
  },
  accountingSoftware: {
    xero: {
      tenantId: { type: String },
      accessToken: { type: String },
      refreshToken: { type: String },
      expiresAt: { type: Date },
      oauthState: { type: String },
      connectedAt: { type: Date }
    }    
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create indexes
organisationSchema.index({ 'subscription.status': 1 });

const Organisation = mongoose.models.Organisation || mongoose.model('Organisation', organisationSchema);

export default Organisation; 