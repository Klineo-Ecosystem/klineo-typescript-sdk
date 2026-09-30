/* eslint-disable */
// Generated from openapi/liquidity-operating-system-v2.openapi.json. Do not edit.

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject { [key: string]: JsonValue | undefined }

export type AtomicAmount = string;

export type PositiveAtomicAmount = string;

export type SignedAtomicAmount = string;

export type Hash = string;

export type Address = string;

export type Pips = number;

export type OperatingSystemRecordStatus = "DRAFT" | "VALIDATED" | "ACTIVE" | "PAUSED" | "COMPLETED" | "EXPIRED" | "REVOKED" | "SUPERSEDED" | "UNAVAILABLE";

export type OperatingSystemRecordType = "ISSUER_INTENT" | "SIMULATION_STUDY" | "SIMULATION_SHARE" | "STRATEGY_DEFINITION" | "PROPOSAL_WORKSPACE" | "LAUNCH_PLAN" | "UNLOCK_IMPACT" | "MARKET_QUALITY_SCORE" | "EXECUTION_ATTRIBUTION" | "ANOMALY" | "TREASURY_LEDGER_ENTRY" | "CAPITAL_REQUIREMENT_STUDY" | "TREASURY_STRESS_TEST" | "VENUE_PROFILE" | "VENUE_OBSERVATION" | "ALLOCATION_PLAN" | "MIGRATION_PLAN" | "AUTONOMY_POLICY" | "POLICY_INTENT_DRAFT" | "PROTECTED_EXECUTION_QUOTE_SET" | "PROTECTED_EXECUTION_PLAN" | "DEVELOPER_CREDENTIAL" | "WEBHOOK_SUBSCRIPTION" | "STRATEGY_PACKAGE" | "PARTNER_TENANT" | "PARTNER_CONSENT" | "MARKET_MAKER_MANDATE" | "INCENTIVE_PROGRAM" | "LIQUIDITY_PASSPORT";

export type RecordEnvelope = { "id": string; "organizationId": string; "recordType": OperatingSystemRecordType; "version": number; "status": OperatingSystemRecordStatus; "payload": {  }; "artifactHash": Hash; "evidenceHashes": Array<Hash>; "createdBy": string; "reason": string; "requestId": string; "createdAt": string; "updatedAt": string; "supersedesVersion"?: number; "resourceVersion": Hash; };

export type IssuerIntentDuration = { "kind": "UNTIL"; "endsAt": string; } | { "kind": "ROLLING"; "days": number; };

export type IssuerIntent = { "name": string; "vaultId"?: string; "quoteSymbol": string; "targetTradeSizeQuote": PositiveAtomicAmount; "maximumSlippagePips": number; "executableDepthQuote": PositiveAtomicAmount; "executableDepthBandPips": number; "treasuryReservePips": Pips; "minimumPriceX18"?: AtomicAmount; "capitalCeilingQuote": PositiveAtomicAmount; "maximumDailyTurnoverPips": Pips; "acceptableVolatilityPips": Pips; "duration": IssuerIntentDuration; "prohibitedBehaviors": Array<string>; };

export type LiquidityPlan = { "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": AtomicAmount; "deployableCapitalQuote": AtomicAmount; "stableReserveQuote": AtomicAmount; "emergencyReserveQuote": AtomicAmount; "rangeWidthPips": Pips; "expectedSlippagePips": Pips; "expectedFeeIncomeLowQuote": AtomicAmount; "expectedFeeIncomeHighQuote": AtomicAmount; "inventoryExposurePips": Pips; "maximumDailyTurnoverPips": Pips; "satisfiesIntent": boolean; "reasons": Array<string>; };

export type LiquidityPlanVariant = { "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": AtomicAmount; "deployableCapitalQuote": AtomicAmount; "stableReserveQuote": AtomicAmount; "emergencyReserveQuote": AtomicAmount; "rangeWidthPips": Pips; "expectedSlippagePips": Pips; "expectedFeeIncomeLowQuote": AtomicAmount; "expectedFeeIncomeHighQuote": AtomicAmount; "inventoryExposurePips": Pips; "maximumDailyTurnoverPips": Pips; "satisfiesIntent": boolean; "reasons": Array<string>; };

export type CapitalRequirementStudy = { "calculationVersion": "capital-requirement-v1" | "capital-requirement-v2"; "intent": IssuerIntent; "minimumCapitalQuote": AtomicAmount; "recommendedRangeWidthPips": Pips; "requiredStableReserveQuote": AtomicAmount; "expectedFeeIncomeLowQuote": AtomicAmount; "expectedFeeIncomeHighQuote": AtomicAmount; "inventoryExposurePips": Pips; "confidencePips": Pips; "variants": Array<LiquidityPlanVariant>; "assumptions": Array<string>; };

export type UnlockTranche = { "id": string; "unlocksAt": string; "tokenAmount": PositiveAtomicAmount; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": Pips; "confidencePips": Pips; "correlationGroup"?: string; "evidenceHash"?: Hash; };

export type UnlockImpactSourceObservation = { "schemaVersion": "unlock-impact-source-observation-v1"; "observationId": string; "chainId": number; "venueId": string; "assetMappingId": string; "tokenPriceX18": PositiveAtomicAmount; "tokenDecimals": number; "quoteDecimals": number; "currentUsableDepthQuote": PositiveAtomicAmount; "currentStableReserveQuote": AtomicAmount; "observedAt": string; "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "payloadHash": Hash; "signature": string; };

export type UnlockImpact = { "calculationVersion": "unlock-impact-v1" | "unlock-impact-v2"; "unlockIds": Array<string>; "sourceLaunchPlanId"?: string; "sourceObservation"?: UnlockImpactSourceObservation; "inputHash"?: Hash; "inputSnapshot"?: UnlockImpactInputSnapshot; "correlationGroups"?: Array<{ "groupId": string; "unlockIds": Array<string>; "totalUnlockedToken": AtomicAmount; "confidencePips": Pips; "sellPressureTokenRange": { "p5": AtomicAmount; "p50": AtomicAmount; "p95": AtomicAmount; }; }>; "sellPressureTokenRange"?: { "p5": AtomicAmount; "p50": AtomicAmount; "p95": AtomicAmount; }; "sellPressureQuoteRange"?: { "p5": AtomicAmount; "p50": AtomicAmount; "p95": AtomicAmount; }; "priceImpactPipsRange"?: { "p5": Pips; "p50": Pips; "p95": Pips; }; "expectedSellPressureToken": AtomicAmount; "expectedSellPressureQuote": AtomicAmount; "usableDepthAfterQuote": AtomicAmount; "expectedPriceImpactPips": Pips; "requiredStableReserveQuote": AtomicAmount; "recommendedRangeShiftPips": number; "treasuryRiskPips": Pips; "confidencePips": Pips; "warnings": Array<string>; };

export type ScenarioDefinition = { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": Pips; "liquidityWithdrawalPips": Pips; "oneSidedFlowPips": Pips; "gasIncreasePips": Pips; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: Pips; "platformFeePips"?: Pips; "unlocks": Array<UnlockTranche>; };

export type DistributionPercentiles = { "p5": SignedAtomicAmount; "p25": SignedAtomicAmount; "p50": SignedAtomicAmount; "p75": SignedAtomicAmount; "p95": SignedAtomicAmount; };

export type PipsPercentiles = { "p5": Pips; "p25": Pips; "p50": Pips; "p75": Pips; "p95": Pips; };

export type SimulationStudySourceLineage = { "schemaVersion": "simulation-study-source-lineage-v1"; "sourceKind": "ISSUER_INTENT" | "LAUNCH_PLAN" | "SANDBOX"; "publicationEligibility": "ELIGIBLE" | "INELIGIBLE_UNBOUND" | "INELIGIBLE_SANDBOX"; "vaultId"?: string; "issuerIntentId"?: string; "issuerIntentVersion"?: number; "issuerIntentResourceVersion"?: Hash; "issuerIntentArtifactHash"?: Hash; "studyInputHash": Hash; "publicationAdmissionHash": Hash; };

export type SimulationStudyInputSnapshot = { "schemaVersion": "simulation-study-input-snapshot-v1"; "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "targetTradeSizeQuote": PositiveAtomicAmount; "startingPortfolioQuote": PositiveAtomicAmount; "startingDepthQuote": PositiveAtomicAmount; "startingInventoryPips": Pips; "scenario": ScenarioDefinition; "variants": Array<LiquidityPlanVariant>; };

export type DisclosedSimulationStudyInputSnapshot = { "schemaVersion": "simulation-study-input-snapshot-v1"; "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "targetTradeSizeQuote": PositiveAtomicAmount; "startingPortfolioQuote": PositiveAtomicAmount; "startingDepthQuote": PositiveAtomicAmount; "startingInventoryPips": Pips; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": Pips; "liquidityWithdrawalPips": Pips; "oneSidedFlowPips": Pips; "gasIncreasePips": Pips; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: Pips; "platformFeePips"?: Pips; "unlocks"?: Array<UnlockTranche>; }; "variants": Array<LiquidityPlanVariant>; };

export type DisclosedSimulationStudy = { "engineVersion": "digital-twin-pcg64-fixed-v1"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": Pips; "liquidityWithdrawalPips": Pips; "oneSidedFlowPips": Pips; "gasIncreasePips": Pips; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: Pips; "platformFeePips"?: Pips; "unlocks"?: Array<UnlockTranche>; }; "variants": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "endingValueQuote": DistributionPercentiles; "slippagePips": PipsPercentiles; "drawdownPips": PipsPercentiles; "turnoverQuote": DistributionPercentiles; "gasCostQuote": DistributionPercentiles; "feeIncomeQuote": DistributionPercentiles; "protocolFeesQuote": DistributionPercentiles; "platformFeesQuote": DistributionPercentiles; "inventoryPips": PipsPercentiles; "minimumDepthQuote": DistributionPercentiles; "reserveBreachProbabilityPips": Pips; "drivers"?: Array<{ "driver": "PRICE_PATH" | "VOLATILITY" | "FLOW" | "LIQUIDITY" | "UNLOCK" | "GAS" | "RESERVE"; "impactQuote": SignedAtomicAmount; "evidence": string; "method": "DETERMINISTIC_COUNTERFACTUAL_DELTA_V1"; }>; }>; "recommendedVariant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "warnings": Array<string>; "replayCompleteness": "HISTORICAL_V1_INPUT_SNAPSHOT_UNAVAILABLE"; "inputHash": Hash | null; "sourceLineage"?: SimulationStudySourceLineage; "treasury"?: { "unlocks": Array<UnlockTranche>; }; "policy"?: { "availability": "NOT_ATTACHED_TO_STUDY"; }; "disclosureApplied": { "drivers": boolean; "treasury": boolean; "policy": boolean; }; } | { "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": Pips; "liquidityWithdrawalPips": Pips; "oneSidedFlowPips": Pips; "gasIncreasePips": Pips; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: Pips; "platformFeePips"?: Pips; "unlocks"?: Array<UnlockTranche>; }; "variants": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "endingValueQuote": DistributionPercentiles; "slippagePips": PipsPercentiles; "drawdownPips": PipsPercentiles; "turnoverQuote": DistributionPercentiles; "gasCostQuote": DistributionPercentiles; "feeIncomeQuote": DistributionPercentiles; "protocolFeesQuote": DistributionPercentiles; "platformFeesQuote": DistributionPercentiles; "inventoryPips": PipsPercentiles; "minimumDepthQuote": DistributionPercentiles; "reserveBreachProbabilityPips": Pips; "drivers"?: Array<{ "driver": "PRICE_PATH" | "VOLATILITY" | "FLOW" | "LIQUIDITY" | "UNLOCK" | "GAS" | "RESERVE"; "impactQuote": SignedAtomicAmount; "evidence": string; "method": "DETERMINISTIC_COUNTERFACTUAL_DELTA_V1"; }>; }>; "recommendedVariant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "warnings": Array<string>; "replayCompleteness": "COMPLETE_INPUT_SNAPSHOT"; "inputHash": Hash; "inputSnapshot": DisclosedSimulationStudyInputSnapshot; "sourceLineage": SimulationStudySourceLineage; "treasury"?: { "unlocks": Array<UnlockTranche>; }; "policy"?: { "availability": "NOT_ATTACHED_TO_STUDY"; }; "disclosureApplied": { "drivers": boolean; "treasury": boolean; "policy": boolean; }; };

export type SimulationStudy = { "engineVersion": "digital-twin-pcg64-fixed-v1"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "scenario": ScenarioDefinition; "variants": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "endingValueQuote": DistributionPercentiles; "slippagePips": PipsPercentiles; "drawdownPips": PipsPercentiles; "turnoverQuote": DistributionPercentiles; "gasCostQuote": DistributionPercentiles; "feeIncomeQuote": DistributionPercentiles; "protocolFeesQuote": DistributionPercentiles; "platformFeesQuote": DistributionPercentiles; "inventoryPips": PipsPercentiles; "minimumDepthQuote": DistributionPercentiles; "reserveBreachProbabilityPips": Pips; "drivers": Array<{ "driver": "PRICE_PATH" | "VOLATILITY" | "FLOW" | "LIQUIDITY" | "UNLOCK" | "GAS" | "RESERVE"; "impactQuote": SignedAtomicAmount; "evidence": string; "method": "DETERMINISTIC_COUNTERFACTUAL_DELTA_V1"; }>; }>; "recommendedVariant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "warnings": Array<string>; "sourceLineage"?: SimulationStudySourceLineage; } | { "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "scenario": ScenarioDefinition; "variants": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "endingValueQuote": DistributionPercentiles; "slippagePips": PipsPercentiles; "drawdownPips": PipsPercentiles; "turnoverQuote": DistributionPercentiles; "gasCostQuote": DistributionPercentiles; "feeIncomeQuote": DistributionPercentiles; "protocolFeesQuote": DistributionPercentiles; "platformFeesQuote": DistributionPercentiles; "inventoryPips": PipsPercentiles; "minimumDepthQuote": DistributionPercentiles; "reserveBreachProbabilityPips": Pips; "drivers": Array<{ "driver": "PRICE_PATH" | "VOLATILITY" | "FLOW" | "LIQUIDITY" | "UNLOCK" | "GAS" | "RESERVE"; "impactQuote": SignedAtomicAmount; "evidence": string; "method": "DETERMINISTIC_COUNTERFACTUAL_DELTA_V1"; }>; }>; "recommendedVariant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "warnings": Array<string>; "inputSnapshot": SimulationStudyInputSnapshot; "sourceLineage": SimulationStudySourceLineage; } | { "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 10000; "stepCount": number; "scenario": ScenarioDefinition; "variants": Array<JsonValue>; "recommendedVariant": null; "warnings": Array<string>; "state": "QUEUED"; "inputHash": Hash; "inputSnapshot": SimulationStudyInputSnapshot; "sourceLineage": SimulationStudySourceLineage; };

export type StrategyPackageSafetyEnvelope = { "supportedAssetIds": Array<string>; "supportedVenueIds": Array<string>; "maximumCapitalQuote": AtomicAmount; "riskClass": "LOW" | "MODERATE" | "HIGH" | "EXPERIMENTAL"; "failureConditions": Array<string>; "safetyEnvelopeHash": Hash; };

export type StrategyPackageSourceLineage = { "schemaVersion": "strategy-package-source-lineage-v1"; "sourcePackageId": string; "sourcePackageVersion": number; "sourcePackageResourceVersion": Hash; "sourcePackageArtifactHash": Hash; "sourcePackageSemanticVersion": string; "sourcePackageContentHash": Hash; "compilerHash": Hash; "approvalRegistryEvidenceHash": Hash; "supportedAssetIds": Array<string>; "supportedVenueIds": Array<string>; "maximumCapitalQuote": AtomicAmount; "riskClass": "LOW" | "MODERATE" | "HIGH" | "EXPERIMENTAL"; "failureConditions": Array<string>; "safetyEnvelopeHash": Hash; };

export type StrategyDefinitionV2Input = { "name": string; "family": "BOOTSTRAP" | "MAINTAIN" | "DIVERSIFY" | "COMPOSED"; "compilerVersion": "strategy-dsl-v1"; "sleeves": Array<{ "id": string; "kind": "CORE_LIQUIDITY" | "DEFENSIVE_DOWNSIDE" | "UPSIDE_SELLING" | "STABLE_RESERVE" | "EMERGENCY_RESERVE"; "allocationPips": Pips; "lowerPriceOffsetPips": number; "upperPriceOffsetPips": number; "minimumCapitalQuote": AtomicAmount; "maximumCapitalQuote": AtomicAmount; "enabled": boolean; }>; "triggers": Array<{ "id": string; "metric": "PRICE" | "INVENTORY" | "DEPTH" | "VOLATILITY" | "ORACLE_HEALTH" | "TIME"; "operator": "LT" | "LTE" | "GT" | "GTE" | "EQ"; "threshold": string; "response": "RECOMMEND" | "PREPARE" | "TIGHTEN" | "PAUSE"; }>; "cooldownSeconds": number; "maximumDailyTurnoverPips": Pips; "minimumPriceX18"?: AtomicAmount; "capitalLimitQuote": AtomicAmount; "oracleMaximumAgeSeconds": number; "worstCaseLossLimitPips": Pips; "legacyStrategyVersion"?: string; };

export type StrategyDefinitionV2 = { "name": string; "family": "BOOTSTRAP" | "MAINTAIN" | "DIVERSIFY" | "COMPOSED"; "compilerVersion": "strategy-dsl-v1"; "sleeves": Array<{ "id": string; "kind": "CORE_LIQUIDITY" | "DEFENSIVE_DOWNSIDE" | "UPSIDE_SELLING" | "STABLE_RESERVE" | "EMERGENCY_RESERVE"; "allocationPips": Pips; "lowerPriceOffsetPips": number; "upperPriceOffsetPips": number; "minimumCapitalQuote": AtomicAmount; "maximumCapitalQuote": AtomicAmount; "enabled": boolean; }>; "triggers": Array<{ "id": string; "metric": "PRICE" | "INVENTORY" | "DEPTH" | "VOLATILITY" | "ORACLE_HEALTH" | "TIME"; "operator": "LT" | "LTE" | "GT" | "GTE" | "EQ"; "threshold": string; "response": "RECOMMEND" | "PREPARE" | "TIGHTEN" | "PAUSE"; }>; "cooldownSeconds": number; "maximumDailyTurnoverPips": Pips; "minimumPriceX18"?: AtomicAmount; "capitalLimitQuote": AtomicAmount; "oracleMaximumAgeSeconds": number; "worstCaseLossLimitPips": Pips; "legacyStrategyVersion"?: string; "sourcePackage"?: StrategyPackageSourceLineage; };

export type StrategyProposalAdmission = { "admissionVersion": "strategy-proposal-admission-v1"; "strategyDefinitionId": string; "strategyDefinitionVersion": number; "strategyDefinitionResourceVersion": Hash; "strategyDefinitionArtifactHash": Hash; "issuerIntentId": string; "issuerIntentVersion": number; "issuerIntentResourceVersion": Hash; "issuerIntentArtifactHash": Hash; "simulationStudyId": string; "simulationStudyVersion": number; "simulationStudyResourceVersion": Hash; "simulationStudyArtifactHash": Hash; "policyIntentDraftId": string; "policyIntentDraftVersion": number; "policyIntentDraftResourceVersion": Hash; "policyIntentDraftArtifactHash": Hash; "oracleProviderId": string; "oracleProviderResourceVersion": Hash; "oracleProviderAttestationHash": Hash; "oracleObservation": { "observedAt": string; "payloadHash": Hash; "signature": string; }; "checks": { "ALLOCATION": { "passed": boolean; "evidence": string; }; "RANGE": { "passed": boolean; "evidence": string; }; "LIQUIDITY": { "passed": boolean; "evidence": string; }; "RESERVE": { "passed": boolean; "evidence": string; }; "ORACLE": { "passed": boolean; "evidence": string; }; "POLICY": { "passed": boolean; "evidence": string; }; "WORST_CASE": { "passed": boolean; "evidence": string; }; "COMPLETED_SIMULATION": { "passed": boolean; "evidence": string; }; }; "valid": boolean; "validatedAt": string; "validUntil": string; "evidenceHashes": Array<Hash>; "sourcePackage"?: StrategyPackageSourceLineage; };

export type ProposalWorkspace = { "proposalId": string; "title": string; "rationale": string; "trigger"?: string; "expectedImprovementQuote": SignedAtomicAmount; "maximumDownsideQuote": AtomicAmount; "costOfNoActionQuote": SignedAtomicAmount; "exactTokenFlows": Array<{ "token": Address; "amount": SignedAtomicAmount; "destination": Address; }>; "beforeDepthQuote": AtomicAmount; "afterDepthQuote": AtomicAmount; "simulationStudyId": string; "strategyDefinitionId": string; "strategyValidationEventId": string; "strategyValidationArtifactHash": Hash; "alternatives": Array<{ "label": string; "outcomeQuote": SignedAtomicAmount; "selected": boolean; }>; "internalApprovalsRequired": number; "internalApprovals": Array<{ "actorId": string; "approvedAt": string; "evidenceHash": Hash; }>; "expiresAt": string; "safeTransactionIntent"?: ProposalSafeTransactionIntent; "safeTransactionHash"?: Hash; };

export type ProposalWorkspaceInput = { "proposalId": string; "title": string; "rationale": string; "trigger"?: string; "expectedImprovementQuote": SignedAtomicAmount; "maximumDownsideQuote": AtomicAmount; "costOfNoActionQuote": SignedAtomicAmount; "exactTokenFlows": Array<{ "token": Address; "amount": SignedAtomicAmount; "destination": Address; }>; "beforeDepthQuote": AtomicAmount; "afterDepthQuote": AtomicAmount; "simulationStudyId": string; "strategyDefinitionId": string; "strategyValidationEventId": string; "strategyValidationArtifactHash": Hash; "alternatives": Array<{ "label": string; "outcomeQuote": SignedAtomicAmount; "selected": boolean; }>; "internalApprovalsRequired": number; "expiresAt": string; "safeTransactionIntent"?: ProposalSafeTransactionIntent; };

export type LaunchTimelineEvent = { "id": string; "kind": "PRE_LAUNCH_SIMULATION" | "INITIAL_FUNDING" | "TGE" | "FIRST_24_HOURS" | "FIRST_7_DAYS" | "MAINTENANCE_TRANSITION" | "EXCHANGE_LISTING" | "INCENTIVE_CHANGE" | "TOKEN_UNLOCK" | "TREASURY_DIVERSIFICATION"; "scheduledAt": string; "reviewOwnerId": string; "dependsOn": Array<string>; "requiresReview": boolean; "status": "PLANNED" | "READY" | "IN_REVIEW" | "COMPLETED" | "BLOCKED" | "CANCELLED"; "evidenceHashes": Array<Hash>; "recommendationTrigger"?: string; "reminderLeadSeconds"?: number; "completedAt"?: string; "completionReceiptHash"?: Hash; };

export type LaunchTimelineEventCreate = { "id": string; "kind": "PRE_LAUNCH_SIMULATION" | "INITIAL_FUNDING" | "TGE" | "FIRST_24_HOURS" | "FIRST_7_DAYS" | "MAINTENANCE_TRANSITION" | "EXCHANGE_LISTING" | "INCENTIVE_CHANGE" | "TOKEN_UNLOCK" | "TREASURY_DIVERSIFICATION"; "scheduledAt": string; "reviewOwnerId": string; "dependsOn": Array<string>; "requiresReview": boolean; "status": "PLANNED"; "evidenceHashes": Array<Hash>; "recommendationTrigger"?: string; "reminderLeadSeconds"?: number; };

export type LaunchPlan = { "calculationVersion": "launch-plan-v2"; "inputSnapshot": { "schemaVersion": "launch-plan-input-v1"; "name": string; "tokenSupply": PositiveAtomicAmount; "treasuryAllocation": PositiveAtomicAmount; "launchValuationQuote": PositiveAtomicAmount; "liquidityBudgetQuote": PositiveAtomicAmount; "expectedInitialDemandQuote": PositiveAtomicAmount; "targetTradeSizeQuote": PositiveAtomicAmount; "maximumInitialSlippagePips": number; "acceptableInitialVolatilityPips": Pips; "initialPriceX18": PositiveAtomicAmount; "unlocks": Array<UnlockTranche>; "reviewOwnerId": string; "launchAt": string; }; "inputHash": Hash; "name": string; "tokenSupply": PositiveAtomicAmount; "treasuryAllocation": PositiveAtomicAmount; "launchValuationQuote": PositiveAtomicAmount; "liquidityBudgetQuote": PositiveAtomicAmount; "expectedInitialDemandQuote": PositiveAtomicAmount; "targetTradeSizeQuote": PositiveAtomicAmount; "maximumInitialSlippagePips": number; "acceptableInitialVolatilityPips": Pips; "initialPriceX18": PositiveAtomicAmount; "unlocks": Array<UnlockTranche>; "recommendedInitialLiquidityQuote": PositiveAtomicAmount; "initialPriceLowerX18": AtomicAmount; "initialPriceUpperX18": AtomicAmount; "requiredReserveQuote": AtomicAmount; "bootstrapPhases": Array<string>; "maintenanceTransition": Array<string>; "emergencyPlaybook": Array<string>; "timeline": Array<LaunchTimelineEvent>; };

export type UnlockImpactLaunchBinding = { "id": string; "version": number; "resourceVersion": Hash; "artifactHash": Hash; };

export type UnlockImpactInputSnapshot = { "schemaVersion": "unlock-impact-input-snapshot-v1"; "unlocks": Array<UnlockTranche>; "sourceLaunchPlan": UnlockImpactLaunchBinding | null; "sourceObservation": UnlockImpactSourceObservation; };

export type MarketQualityObservationMetrics = { "targetTradeSizeQuote": PositiveAtomicAmount; "spreadPips": Pips; "concentrationPips": Pips; "volatilityImpactPips": Pips; "inventoryRiskPips": Pips; "imbalancePips": Pips; "recoverySeconds": number; "recoveryTargetSeconds": number; };

export type MarketQualityRawMetrics = { "targetTradeSizeQuote"?: PositiveAtomicAmount; "usableDepthQuote"?: AtomicAmount; "deployedCapitalQuote"?: AtomicAmount; "activeCapitalQuote"?: AtomicAmount; "slippagePips"?: Pips; "spreadPips"?: Pips; "concentrationPips"?: Pips; "volatilityImpactPips"?: Pips; "inventoryRiskPips"?: Pips; "imbalancePips"?: Pips; "recoverySeconds"?: number; "recoveryTargetSeconds"?: number; "reliabilityPips"?: Pips; };

export type MarketQualityVenueSourceBinding = { "recordId": string; "observationId": string; "version": number; "resourceVersion": Hash; "artifactHash": Hash; "evidenceHash": Hash; "sourceProfileArtifactHash": Hash; "providerPayloadHash": Hash; "capturedAt": string; };

export type MarketQualityExecutionSourceBinding = { "recordId": string; "proposalId": string; "version": number; "resourceVersion": Hash; "artifactHash": Hash; "finalizedAt": string; };

export type MarketQualityCohortSourceBinding = { "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "cohortDefinitionId": string; "cohortDefinitionHash": Hash; "observedAt": string; "issuers": Array<{ "issuerCommitmentHash": Hash; "score": number; "eligibilityEvidenceHash": Hash; }>; "signature": string; "evidenceHash": Hash; };

export type MarketQualityVaultSourceBinding = { "vaultId": string; "qualificationArtifactHash": Hash; "poolAddress": Address; "projectToken": Address; "quoteToken": Address; "venueId": string; "chainId": number; };

export type MarketQualityPriorScoreSourceBinding = { "recordId": string; "version": number; "resourceVersion": Hash; "artifactHash": Hash; "capturedAt": string; "componentScoresHash": Hash; };

export type MarketQualitySourceBindings = { "vault": MarketQualityVaultSourceBinding; "venueObservations": Array<MarketQualityVenueSourceBinding>; "executionAttributions": Array<MarketQualityExecutionSourceBinding>; "cohortEvidence"?: MarketQualityCohortSourceBinding; "priorScore"?: MarketQualityPriorScoreSourceBinding; };

export type MarketQualityScore = { "scoreVersion": "market-quality-score-v1" | "market-quality-score-v2"; "vaultId": string; "capturedAt": string; "rawMetrics"?: MarketQualityRawMetrics; "sourceBindings"?: MarketQualitySourceBindings; "inputHash"?: Hash; "availability": "AVAILABLE" | "UNAVAILABLE"; "score"?: number; "coveragePips": Pips; "components": Array<{ "component": "SLIPPAGE" | "USABLE_DEPTH" | "SPREAD" | "CAPITAL_EFFICIENCY" | "CONCENTRATION" | "VOLATILITY_RESISTANCE" | "INVENTORY_RISK" | "IMBALANCE" | "PRICE_RECOVERY" | "RELIABILITY"; "weightPips": Pips; "score"?: number; "evidenceHashes": Array<Hash>; }>; "changeDrivers": Array<{ "component": "SLIPPAGE" | "USABLE_DEPTH" | "SPREAD" | "CAPITAL_EFFICIENCY" | "CONCENTRATION" | "VOLATILITY_RESISTANCE" | "INVENTORY_RISK" | "IMBALANCE" | "PRICE_RECOVERY" | "RELIABILITY"; "delta": number; }>; "improvements": Array<string>; "peerBenchmark"?: { "cohortDefinition": string; "cohortSize": number; "percentile": number; }; "unavailableReason"?: string; };

export type ExecutionAttribution = { "attributionVersion": "execution-attribution-v1"; "proposalId": string; "transactionHash": Hash; "finalizedAt": string; "observationHorizonsComplete": boolean; "sourceSimulationStudyId": string; "frozenForecastArtifactHash": Hash; "finalityEvidenceHash": Hash; "reconciliationEvidenceHash": Hash; "observationHorizons": Array<{ "kind": "IMMEDIATE" | "ADVERSE_SELECTION" | "RECOVERY"; "endedAt": string; "evidenceHash": Hash; }>; "metrics": Array<{ "metric": "SLIPPAGE" | "FEES" | "GAS" | "INVENTORY" | "CAPITAL_EFFICIENCY" | "PRICE_MOVEMENT"; "predicted": SignedAtomicAmount; "realized": SignedAtomicAmount; "residual": SignedAtomicAmount; "unit": "QUOTE_ATOMIC" | "TOKEN_ATOMIC" | "PIPS"; }>; "adverseSelectionQuote": SignedAtomicAmount; "noActionCounterfactualQuote": SignedAtomicAmount; "realizedOutcomeQuote": SignedAtomicAmount; "calibrationResidualHash": Hash; "evidenceHashes": Array<Hash>; };

export type Anomaly = { "detectorVersion": "robust-mad-v1"; "subject": { "kind": "VAULT"; "vaultId": string; }; "evaluatedAt": string; "currentObservation": { "capturedAt": string; "value": SignedAtomicAmount; "evidenceHash": Hash; }; "inputHash"?: Hash; "derivationHash"?: Hash; "sourceProvider"?: { "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "observedAt": string; "payloadHash": Hash; "signature": string; }; "kind": "LIQUIDITY_DISAPPEARANCE" | "ONE_SIDED_FLOW" | "INACTIVE_RANGE" | "STABLECOIN_DEPEG" | "ORACLE_DISAGREEMENT" | "INVENTORY_ACCUMULATION" | "EXCESSIVE_TURNOVER" | "MANIPULATION_INDICATOR" | "SIMULATED_REALIZED_DIVERGENCE"; "detected": boolean; "severity": "INFO" | "WARNING" | "CRITICAL"; "median": SignedAtomicAmount; "medianAbsoluteDeviation": AtomicAmount; "deviationMultiplesPips": number; "coveragePips": Pips; "explanation": string; "responses": Array<"MONITOR" | "TIGHTEN_POLICY" | "PREPARE_REBALANCE" | "PROTECT_RESERVE" | "PAUSE">; "evidenceHashes": Array<Hash>; };

export type TreasuryBucket = { "entryId": string; "bucket": "OPERATING_RESERVE" | "EMERGENCY_RESERVE" | "LIQUIDITY_CAPITAL" | "DIVERSIFICATION_CAPITAL" | "INCENTIVE_BUDGET" | "STRATEGIC_RESERVE"; "state": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING" | "FUTURE_COMMITTED"; "asset": Address; "amountAtomic": AtomicAmount; "valueQuote": AtomicAmount; "sourceKind": "SAFE" | "VAULT" | "EXTERNAL_MANAGER" | "SIGNED_OBLIGATION"; "sourceId": string; "sourceObservationId": string; "capitalContainerId": string; "custodyLocationId": string; "obligationIds": Array<string>; "futureCommittedValueQuote": AtomicAmount; "oracleSourceId": string; "oracleProviderResourceVersion": Hash; "oracleAttestationHash": Hash; "oracleEvidenceHash": Hash; "oracleSignature": string; "oracleObservedAt": string; "oracleMaximumAgeSeconds": number; "oracleConfidencePips": Pips; "bridgeHaircutPips": Pips; "counterpartyHaircutPips": Pips; "effectiveAt": string; "evidenceHash": Hash; "reconciliationEvidenceHash": Hash; };

export type TreasurySummary = { "ledgerVersion": "treasury-ledger-v1" | "treasury-ledger-v2"; "capturedAt": string; "grossValueQuote": AtomicAmount; "riskAdjustedValueQuote": AtomicAmount; "futureCommittedValueQuote": AtomicAmount; "uncommittedValueQuote": AtomicAmount; "buckets": Array<{ "bucket": "OPERATING_RESERVE" | "EMERGENCY_RESERVE" | "LIQUIDITY_CAPITAL" | "DIVERSIFICATION_CAPITAL" | "INCENTIVE_BUDGET" | "STRATEGIC_RESERVE"; "grossValueQuote": AtomicAmount; "riskAdjustedValueQuote": AtomicAmount; "futureCommittedValueQuote": AtomicAmount; "uncommittedValueQuote": AtomicAmount; "byState": { [key: string]: AtomicAmount | undefined; }; }>; "assets": Array<{ "asset": Address; "grossValueQuote": AtomicAmount; "riskAdjustedValueQuote": AtomicAmount; "futureCommittedValueQuote": AtomicAmount; "uncommittedValueQuote": AtomicAmount; }>; "containers": Array<{ "capitalContainerId": string; "custodyLocationId": string; "asset": Address; "bucket": string; "state": string; "grossValueQuote": AtomicAmount; "futureCommittedValueQuote": AtomicAmount; "obligationIds": Array<string>; "sourceObservationId": string; }>; "duplicateSourceIds": Array<string>; "duplicateEconomicKeys": Array<string>; "staleEntryIds": Array<string>; "invalidEntryIds": Array<string>; "conservation": { "bucketGrossValueQuote": AtomicAmount; "assetGrossValueQuote": AtomicAmount; "containerGrossValueQuote": AtomicAmount; "stateGrossValueQuote": AtomicAmount; "committedOverlayValueQuote": AtomicAmount; "conserved": boolean; "evidenceHash"?: Hash; }; "complete": boolean; "warnings": Array<string>; };

export type TreasuryStressStudy = { "stressSuiteVersion": "treasury-stress-suite-v1"; "evaluatedAt": string; "launchPlanId": string; "vaultId": string; "policyControlEpoch": AtomicAmount; "policyLevel": 0 | 1 | 2 | 3 | 4; "ledgerEvidenceHashes": Array<Hash>; "unlockScheduleHash": Hash; "unlockImpactId": string; "unlockImpactResourceVersion": Hash; "unlockImpactArtifactHash": Hash; "policyArtifactHash": Hash; "results": Array<{ "stressVersion": "treasury-stress-v1" | "treasury-stress-v2"; "kind": "TOKEN_PRICE_FALL_50" | "STABLECOIN_DEPEG" | "MAJOR_HOLDER_SELL" | "LP_WITHDRAWAL" | "EXCHANGE_DELISTING" | "RUNWAY_DETERIORATION" | "SIMULTANEOUS_UNLOCKS"; "startingRiskAdjustedValueQuote": AtomicAmount; "stressedRiskAdjustedValueQuote": AtomicAmount; "lossQuote": AtomicAmount; "reserveSufficient": boolean; "runwayDays": number; "bucketBreaches": Array<string>; "liquidationCostQuote": AtomicAmount; "mitigations": Array<string>; "policyLevel"?: 0 | 1 | 2 | 3 | 4; "shockMagnitudePips"?: Pips; "unlockSellPressureQuote"?: AtomicAmount; }>; "allSevenShocksApplied": true; "executionAuthorityGranted": false; };

export type VenueProfile = { "venueId": string; "chainId": number; "name": string; "kind": "BDEX_V3" | "EVM_V3" | "EXTERNAL_MANAGER" | "TREASURY_RESERVE"; "writeAuthority": "AUDITED_TYPED_ADAPTER" | "READ_ONLY"; "factoryAddress"?: Address; "adapterRegistryAddress"?: Address; "adapterAddress"?: Address; "asset0"?: Address; "asset1"?: Address; "adapterRuntimeHash"?: Hash; "controllerVenueId"?: Hash; "poolHealthGuardAddress"?: Address; "maximumTwapDeviationPips"?: Pips; "maximumPositionWidthTicks"?: number; "allowedActions"?: Array<boolean>; "finalityBlocks": number; "reliabilityPips": Pips; "exitCostPips": Pips; "attestationHash": Hash; };

export type VenueRpcQuorumAttestation = { "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "memberId": string; "endpointId": string; "chainId": number; "chainGenesisHash": Hash; "finalizedBlockNumber": AtomicAmount; "finalizedBlockHash": Hash; "observationFactsHash": Hash; "observedAt": string; "signature": string; };

export type VenueRpcQuorumVerification = { "verifierVersion": "external-evm-rpc-quorum-v1" | "onchain-market-maker-rpc-quorum-v1"; "status": "VERIFIED" | "UNVERIFIED"; "verifiedAt": string; "providerIds": Array<string>; "memberIds": Array<string>; "endpointIds": Array<string>; "chainId": number; "chainGenesisHash": Hash; "finalizedBlockNumber": AtomicAmount; "finalizedBlockHash": Hash; "observationFactsHash": Hash; "agreementHash": Hash; "failureReasons": Array<"INSUFFICIENT_ATTESTATIONS" | "DUPLICATE_PROVIDER" | "DUPLICATE_MEMBER" | "DUPLICATE_ENDPOINT" | "UNKNOWN_PROVIDER" | "PROVIDER_NOT_HEALTHY" | "PROVIDER_GENERATION_MISMATCH" | "PROVIDER_ATTESTATION_MISMATCH" | "PROVIDER_SCOPE_MISMATCH" | "STALE_ATTESTATION" | "FUTURE_ATTESTATION" | "CHAIN_MISMATCH" | "GENESIS_MISMATCH" | "FINALIZED_BLOCK_MISMATCH" | "OBSERVATION_FACTS_MISMATCH" | "INVALID_SIGNATURE">; };

export type ProviderGatewayResponse = { "capability": string; "requestId": string; "attestationHash": Hash; "observedAt": string; "payloadHash": Hash; "payload": {  }; "signature": string; };

export type PersistedProviderGatewayEvidence = { "providerId": string; "capability": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "providerPublicKeyFingerprint": Hash; "providerPublicKeySpkiBase64": string; "response": ProviderGatewayResponse; };

export type ExternalVenueProviderEvidence = { "capability": "EXTERNAL_VENUE_INDEXING"; "providerId": string; "providerKeyResourceVersion": Hash; "providerPublicKeyFingerprint": Hash; "providerPublicKeySpkiBase64": string; "requestId": string; "observedAt": string; "attestationHash": Hash; "payloadHash": Hash; "signature": string; };

export type VenueObservation = { "observationId": string; "vaultId"?: string; "venueId": string; "poolAddress"?: Address; "feeTierPips"?: Pips; "assetMappingId": string; "deployedCapitalQuote": AtomicAmount; "activeCapitalQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "volumeQuote": AtomicAmount; "feesQuote": AtomicAmount; "slippagePips": Pips; "incentiveIncomeQuote": AtomicAmount; "fragmentationPips": Pips; "riskPips": Pips; "reliabilityPips": Pips; "bridgeHaircutPips": Pips; "marketQualityMetrics"?: MarketQualityObservationMetrics; "capturedAt": string; "chainId"?: number; "chainGenesisHash"?: Hash; "finalizedBlockNumber"?: AtomicAmount; "finalizedBlockHash"?: Hash; "finalityEvidenceHash"?: Hash; "rpcQuorumAttestations"?: Array<VenueRpcQuorumAttestation>; "rpcQuorumVerification"?: VenueRpcQuorumVerification; "providerEvidence"?: ExternalVenueProviderEvidence; "sourceVenueProfile"?: VenueProfileGenerationBinding; "evidenceHash": Hash; };

export type VenueAllocation = { "venueId": string; "allocationPips": Pips; "capitalQuote": AtomicAmount; "compositeScore": Pips; "writeAuthority": "AUDITED_TYPED_ADAPTER" | "READ_ONLY"; "reasons": Array<string>; };

export type AllocationScoreVector = { "executionQualityPips": Pips; "feeYieldPips": Pips; "usableDepthPips": Pips; "capitalEfficiencyPips": Pips; "riskAdjustedSafetyPips": Pips; "fragmentationResistancePips": Pips; "exitFlexibilityPips": Pips; };

export type AllocationPlanCandidate = { "candidateId": string; "objective": "BALANCED" | "EXECUTION_QUALITY" | "CAPITAL_EFFICIENCY" | "RISK_MINIMIZED" | "EXIT_FLEXIBILITY"; "allocations": Array<VenueAllocation>; "scoreVector": AllocationScoreVector; "aggregateScorePips": Pips; "confidencePips": Pips; "executionClass": "PREVIEW_ONLY" | "BDEX_TYPED_EXECUTABLE"; };

export type AllocationPlan = { "allocatorVersion": "multi-venue-pareto-v1"; "intentName": string; "assetMappingId": string; "evaluatedAt": string; "totalCapitalQuote": AtomicAmount; "reservedCapitalQuote": AtomicAmount; "deployableCapitalQuote": AtomicAmount; "selectedCandidateId": string; "allocations": Array<VenueAllocation>; "paretoFrontier": Array<AllocationPlanCandidate>; "alternatives": Array<AllocationPlanCandidate>; "currentPlanScorePips": Pips; "expectedPlanScorePips": Pips; "expectedScoreImprovementPips": number; "confidencePips": Pips; "excludedVenues": Array<{ "venueId": string; "reasonCodes": Array<"UNKNOWN_VENUE" | "PROFILE_STATUS_INELIGIBLE" | "TREASURY_RESERVE_PROTECTED" | "NO_MATCHING_OBSERVATION" | "STALE_OBSERVATION" | "FUTURE_OBSERVATION" | "MISSING_PROVIDER_EVIDENCE" | "ATTESTATION_MISMATCH" | "MISSING_FINALITY_EVIDENCE" | "MISSING_RPC_QUORUM">; "observedProfileStatus"?: OperatingSystemRecordStatus; "profileResourceVersion"?: Hash; "profileArtifactHash"?: Hash; }>; "assumptions": Array<string>; "executionClass": "PREVIEW_ONLY" | "BDEX_TYPED_EXECUTABLE"; };

export type ControllerVenueActionV2 = { "kind": 0 | 1 | 2 | 3 | 4 | 5 | 6; "venueId": Hash; "asset0": Address; "asset1": Address; "assetIn": Address; "assetOut": Address; "amountIn": AtomicAmount; "minimumAmountOut": AtomicAmount; "amount0Max": AtomicAmount; "amount1Max": AtomicAmount; "amount0Min": AtomicAmount; "amount1Min": AtomicAmount; "positionId": AtomicAmount; "tickLower": number; "tickUpper": number; "liquidity": AtomicAmount; "sqrtPriceLimitX96": AtomicAmount; "deadline": AtomicAmount; "quoteHash": Hash; };

export type ControllerExecutionBindingV2 = { "schemaVersion": "scheduled-liquidity-controller-action-v2"; "functionName": "executeSafeAction" | "executeAutopilotAction" | "executeScheduledLeg"; "controllerAddress": Address; "adapterAddress": Address; "action": ControllerVenueActionV2; "actionId"?: Hash; "planId"?: Hash; "legIndex"?: number; "proof"?: Array<Hash>; "calldata": string; "calldataHash": Hash; };

export type ProposalSafeTransactionIntent = { "schemaVersion": "proposal-controller-safe-intent-v1"; "chainId": 677 | 968; "vaultId": string; "vaultAddress": Address; "ownerSafe": Address; "venueId": string; "controllerExecution": ControllerExecutionBindingV2; };

export type MigrationLegEconomicBindingV2 = { "schemaVersion": "migration-leg-economic-binding-v2"; "legId": string; "capitalQuote": PositiveAtomicAmount; "asset0": Address; "asset1": Address; "quoteAsset": Address; "asset0Decimals": number; "asset1Decimals": number; "quoteDecimals": number; "asset0PriceQuoteX18": PositiveAtomicAmount; "asset1PriceQuoteX18": PositiveAtomicAmount; "expectedAmount0Atomic": AtomicAmount; "expectedAmount1Atomic": AtomicAmount; "valuationTolerancePips": number; "actionKind": 1 | 2 | 3; "actionPositionId": AtomicAmount; "actionLiquidity": AtomicAmount; "actionAmount0Max": AtomicAmount; "actionAmount1Max": AtomicAmount; "actionAmount0Min": AtomicAmount; "actionAmount1Min": AtomicAmount; "controllerActionHash": Hash; "oracleProviderId": string; "oracleProviderResourceVersion": Hash; "oracleProviderAttestationHash": Hash; "maximumAgeSeconds": number; "observedAt": string; "payloadHash": Hash; "signature": string; };

export type MigrationPlanLeg = { "index": number; "legId": string; "route": "FORWARD" | "ROLLBACK"; "kind": "WITHDRAW" | "HOLD_CHECKPOINT" | "DEPLOY" | "VERIFY" | "ROLLBACK_CHECKPOINT" | "ROLLBACK_WITHDRAW_TARGET" | "ROLLBACK_REDEPLOY_SOURCE" | "ROLLBACK_VERIFY_SOURCE"; "venueId": string; "capitalQuote": AtomicAmount; "minimumDepthAfterQuote": AtomicAmount; "maximumSlippagePips": Pips; "dependsOnLegId"?: string; "requiresPreviousLegFinalizedAndReconciled": boolean; "conditional": boolean; "controllerExecution"?: ControllerExecutionBindingV2; "economicBinding"?: MigrationLegEconomicBindingV2; };

export type VenueProfileGenerationBinding = { "recordId": string; "recordVersion": number; "resourceVersion": Hash; "artifactHash": Hash; "status": "VALIDATED" | "ACTIVE"; "venueId": string; "chainId": number; "kind": "BDEX_V3" | "EVM_V3" | "EXTERNAL_MANAGER" | "TREASURY_RESERVE"; "writeAuthority": "AUDITED_TYPED_ADAPTER" | "READ_ONLY"; "attestationHash": Hash; "adapterRegistryAddress"?: Address; "adapterAddress"?: Address; "adapterRuntimeHash"?: Hash; "controllerVenueId"?: Hash; "asset0"?: Address; "asset1"?: Address; };

export type MigrationVenueProfileBinding = VenueProfileGenerationBinding;

export type MigrationPlan = { "plannerVersion": "liquidity-migration-v1"; "stateMachineVersion": "liquidity-migration-state-v1"; "executionVaultId"?: string; "sourceVenueId": string; "targetVenueId": string; "sourceVenueBinding": MigrationVenueProfileBinding; "targetVenueBinding": MigrationVenueProfileBinding; "capitalQuote": AtomicAmount; "temporaryDepthReductionQuote": AtomicAmount; "expectedPriceImpactPips": Pips; "migrationCostQuote": AtomicAmount; "expectedMarketQualityImprovement": number; "executionClass": "PREVIEW_ONLY" | "AUDITED_TYPED_ADAPTER"; "legs": Array<MigrationPlanLeg>; "rollbackLegs": Array<MigrationPlanLeg>; "rollbackReason": string; "assumptions": Array<string>; };

export type MigrationActionEnvelopeV2 = { "schemaVersion": "migration-action-envelope-v2"; "actionIntentHash": Hash; "vaultId": string; "vaultAddress": Address; "controllerAddress": Address; "ownerSafe": Address; "controllerCalldata": string; "controllerCalldataHash": Hash; };

export type MigrationVaultGenerationBindingV2 = { "schemaVersion": "migration-vault-generation-binding-v2"; "vaultId": string; "updatedAt": string; "vaultAddress": Address; "controllerAddress": Address; "ownerSafe": Address; "deploymentProvenanceHash": Hash; "deploymentBlockHash": Hash; "deploymentRuntimeHashes": { "module": Hash; "vault": Hash; "policyManager": Hash; "oracleGuard": Hash; "executionController": Hash; "executionRiskEngine": Hash; }; "policyStateGeneration": string | null; "controlStateGeneration": string | null; };

export type OperatingSystemSubmissionReleaseRuntimeAuthorityV2 = { "releaseId": Hash; "chainId": 677 | 968; "environment": "testnet" | "staging" | "mainnet"; "issuedAt": string; "expiresAt": string; "sourceCommit": Hash; "artifactDigest": Hash; "v1ReleaseDigest": Hash; "maximumAutonomyLevel": 0 | 1 | 2 | 3 | 4; "emergencyState": "NORMAL" | "PAUSED"; "automatedExecution": boolean; "publicMempoolFallback": boolean; "bot968Live": boolean; "bot677Live": boolean; "namedCappedVaults": Array<{ "vaultId": string; "name": string; "vaultAddress": Address; "capitalCapAtomic": AtomicAmount; "evidenceHash": Hash; }>; "externalEvmV3WriteAdaptersEnabled": false; "components": { "venueAdapterRegistryV2": { "address": Address; "runtimeCodeHash": Hash; }; "klineOPrivateVaultV2": { "address": Address; "runtimeCodeHash": Hash; }; "scheduledLiquidityControllerV2": { "address": Address; "runtimeCodeHash": Hash; }; "bdexV3AdapterV2": { "address": Address; "runtimeCodeHash": Hash; }; }; "enabledAdapterVenueIds": Array<string>; "enabledAdapterCaps": Array<{ "venueId": string; "perVenueCaps": Array<{ "maximumPerActionQuote": AtomicAmount; "maximumDailyTurnoverQuote": AtomicAmount; }>; "perAssetCaps": Array<{ "asset": Address; "maximumPerAction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; }>; }>; };

export type OperatingSystemSubmissionReleaseAuthorityV2 = { "schemaVersion": "operating-system-submission-release-authority-v2"; "releaseId": Hash; "releaseDigest": Hash; "feature": "migrationPlanner" | "protectedExecution"; "featureState": "LIVE"; "cryptographicallyVerified": true; "authorityEnabled": true; "runtimeAuthority": OperatingSystemSubmissionReleaseRuntimeAuthorityV2; "runtimeAuthorityHash": Hash; };

export type MigrationActionIntentV2 = { "schemaVersion": "migration-action-intent-v2"; "releaseId": Hash; "chainId": 677 | 968; "planId": string; "planRootHash": Hash; "route": "FORWARD" | "ROLLBACK"; "leg": MigrationPlanLeg; "controllerExecution": ControllerExecutionBindingV2; };

export type MigrationSubmissionAuthorityV2 = { "schemaVersion": "migration-submission-authority-v2"; "releaseAuthority": OperatingSystemSubmissionReleaseAuthorityV2; "actionIntent": MigrationActionIntentV2; "actionIntentHash": Hash; "actionEnvelope": MigrationActionEnvelopeV2; "actionEnvelopeHash": Hash; "sourceVenueBinding": MigrationVenueProfileBinding; "targetVenueBinding": MigrationVenueProfileBinding; "vaultGeneration": MigrationVaultGenerationBindingV2; "safeVerificationEvidenceHash": Hash; "minimumFinalityDepth": number; "authorizationTransactionHash": Hash; };

export type MigrationSkipTargetFactsV2 = { "schemaVersion": "migration-skip-target-facts-v2"; "venueId": string; "controllerVenueId": Hash; "targetVenueProfileResourceVersion": Hash; "targetVenueProfileArtifactHash": Hash; "vaultId": string; "vaultUpdatedAt": string; "vaultGenerationHash": Hash; "factsBlockNumber": AtomicAmount; "factsBlockHash": Hash; "positionId": AtomicAmount; "positionExists": boolean; "positionLiquidityAtomic": AtomicAmount; "positionAmount0Atomic": AtomicAmount; "positionAmount1Atomic": AtomicAmount; "issuerControlledPositionCount": number; "issuerControlledLiquidityAtomic": AtomicAmount; "issuerControlledAmount0Atomic": AtomicAmount; "issuerControlledAmount1Atomic": AtomicAmount; "targetVenueAsset0BalanceAtomic": AtomicAmount; "targetVenueAsset1BalanceAtomic": AtomicAmount; "vaultAsset0BalanceAtomic": AtomicAmount; "vaultAsset1BalanceAtomic": AtomicAmount; "usableDepthAfterQuote": AtomicAmount; "issuerControlledDepthQuote": AtomicAmount; };

export type MigrationExecutionResultV2 = { "schemaVersion": "migration-execution-result-v2"; "executionSucceeded": boolean; "returnDataHash": Hash; "logsHash": Hash; "stateDeltaHash": Hash; };

export type MigrationTransactionReceiptV2 = { "schemaVersion": "migration-transaction-receipt-v2"; "actionEnvelopeHash": Hash; "submissionEvidenceHash": Hash; "transactionHash": Hash; "receiptStatus": 0 | 1; "executionResult": MigrationExecutionResultV2; "executionResultHash": Hash; "finalizedBlockNumber": AtomicAmount; "finalizedBlockHash": Hash; "finalizedAt": string; "finalityDepth": number; "finalityEvidenceHash": Hash; };

export type MigrationSkipSnapshotBindingV2 = { "schemaVersion": "migration-skip-snapshot-binding-v2"; "actionIntentHash": Hash; "actionEnvelopeHash": Hash; "planId": string; "planRootHash": Hash; "previousStateHash": Hash; "priorLegStatus": "READY"; "route": "ROLLBACK"; "legId": string; "legKind": "ROLLBACK_WITHDRAW_TARGET"; "targetVenueBinding": MigrationVenueProfileBinding; "vaultGeneration": MigrationVaultGenerationBindingV2; "actionEnvelope": MigrationActionEnvelopeV2; "safeVerificationEvidenceHash": Hash; "minimumFinalityDepth": number; };

export type MigrationSkipReconciliationSnapshotV2 = { "schemaVersion": "migration-skip-reconciliation-snapshot-v2"; "snapshotBinding": MigrationSkipSnapshotBindingV2; "snapshotBindingHash": Hash; "targetFacts": MigrationSkipTargetFactsV2; "targetFactsHash": Hash; "actionUnnecessaryPredicate": { "predicateVersion": "rollback-withdraw-target-unnecessary-v1"; "result": true; "predicateHash": Hash; }; "finalizedBlockNumber": AtomicAmount; "finalizedBlockHash": Hash; "finalizedAt": string; "finalityDepth": number; "finalityEvidenceHash": Hash; "reconciliationBlockNumber": AtomicAmount; "reconciliationBlockHash": Hash; "reconciledAt": string; "reconciliationStatus": "MATCHED"; "reconciliationEvidenceHash": Hash; "observedAt": string; };

export type MigrationPlanTransition = { "sequence": number; "legId": string; "route": "FORWARD" | "ROLLBACK"; "fromStatus": "BLOCKED" | "READY" | "SUBMITTED" | "FINALIZED_RECONCILED" | "FAILED_FINALIZED_RECONCILED" | "SKIPPED_RECONCILED"; "toStatus": "SUBMITTED" | "FINALIZED_RECONCILED" | "FAILED_FINALIZED_RECONCILED" | "SKIPPED_RECONCILED"; "previousStateHash": Hash; "observedAt": string; "submissionEvidenceHash"?: Hash; "transactionHash"?: Hash; "submissionAuthority"?: MigrationSubmissionAuthorityV2; "finalityEvidenceHash"?: Hash; "reconciliationEvidenceHash"?: Hash; "executionReceipt"?: MigrationTransactionReceiptV2; "skipReconciliationSnapshot"?: MigrationSkipReconciliationSnapshotV2; };

export type MigrationPlanExecutionState = { "stateMachineVersion": "liquidity-migration-state-v1"; "status": "READY" | "IN_PROGRESS" | "COMPLETED" | "ABORTED_RECONCILED" | "ROLLBACK_READY" | "ROLLING_BACK" | "ROLLED_BACK" | "FAILED_CLOSED"; "forwardLegs": Array<{ "legId": string; "route": "FORWARD" | "ROLLBACK"; "status": "BLOCKED" | "READY" | "SUBMITTED" | "FINALIZED_RECONCILED" | "FAILED_FINALIZED_RECONCILED" | "SKIPPED_RECONCILED"; "lastTransitionSequence"?: number; }>; "rollbackLegs": Array<{ "legId": string; "route": "FORWARD" | "ROLLBACK"; "status": "BLOCKED" | "READY" | "SUBMITTED" | "FINALIZED_RECONCILED" | "FAILED_FINALIZED_RECONCILED" | "SKIPPED_RECONCILED"; "lastTransitionSequence"?: number; }>; "transitionCount": number; };

export type ControllerAssetLimitV2 = { "asset": Address; "decimals": number; "maximumPerAction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; };

export type ControllerVenueAssetLimitV2 = { "adapterId": string; "venueId": Hash; "asset": Address; "decimals": number; "maximumPerAction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; };

export type ControllerAdapterPermissionV2 = { "adapterId": string; "adapter": Address; "poolHealthGuard": Address; "maximumTwapDeviationPips": number; "maximumPositionWidthTicks": number; "allowedActions": Array<boolean>; };

export type ControllerCriticalDetectorPermissionV2 = { "detectorId": Hash; "allowed": boolean; };

export type ControllerPolicyBindingV2 = { "schemaVersion": "scheduled-liquidity-controller-policy-v2"; "executor": Address; "guardian": Address; "reconciler": Address; "priceGuard": Address; "floorBaseAsset": Address; "floorQuoteAsset": Address; "minimumReconciliationBlocks": number; "evidenceHash": Hash; "assetLimits": Array<ControllerAssetLimitV2>; "venueLimits": Array<ControllerVenueAssetLimitV2>; "adapterPermissions": Array<ControllerAdapterPermissionV2>; "criticalDetectors": Array<ControllerCriticalDetectorPermissionV2>; };

export type ActivatedControllerPolicyV2 = { "schemaVersion": "activated-controller-policy-v2"; "policyHash": Hash; "configuration": { "level": 0 | 1 | 2 | 3 | 4; "activationControlEpoch": AtomicAmount; "executor": Address; "guardian": Address; "reconciler": Address; "priceGuard": Address; "floorBaseAsset": Address; "floorQuoteAsset": Address; "cooldown": number; "maximumOracleAge": number; "expiresAtSeconds": AtomicAmount; "maximumSlippagePips": Pips; "minimumReconciliationBlocks": number; "priceFloorX18": AtomicAmount; "priceCeilingX18": AtomicAmount; "publicMempoolAllowed": boolean; "evidenceHash": Hash; }; "assetLimits": Array<{ "asset": Address; "decimals": number; "maximumPerAction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; }>; "venueLimits": Array<{ "venueId": Hash; "asset": Address; "decimals": number; "maximumPerAction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; }>; "adapters": Array<{ "adapter": Address; "allowedActions": Array<boolean>; }>; "detectors": Array<{ "detectorId": Hash; "allowed": boolean; }>; };

export type AutonomyPolicy = { "vaultId": string; "level": 0 | 1 | 2 | 3 | 4; "emergencyPaused": boolean; "maximumAmountPerTransaction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; "maximumSlippagePips": Pips; "approvedContracts": Array<Address>; "approvedAssets": Array<Address>; "approvedAdapterIds": Array<string>; "minimumSecondsBetweenActions": number; "minimumPriceX18"?: AtomicAmount; "maximumPriceX18"?: AtomicAmount; "oracleMaximumAgeSeconds": number; "expiresAt": string; "controlEpoch": AtomicAmount; "publicMempoolFallbackAllowed": boolean; "controllerBinding"?: ControllerPolicyBindingV2; "activatedControllerPolicy"?: ActivatedControllerPolicyV2; "approvedAt"?: string; "safeTransactionHash"?: Hash; };

export type AutonomyPolicyInput = { "vaultId": string; "level": 0 | 1 | 2 | 3 | 4; "emergencyPaused": boolean; "maximumAmountPerTransaction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; "maximumSlippagePips": Pips; "approvedContracts": Array<Address>; "approvedAssets": Array<Address>; "approvedAdapterIds": Array<string>; "minimumSecondsBetweenActions": number; "minimumPriceX18"?: AtomicAmount; "maximumPriceX18"?: AtomicAmount; "oracleMaximumAgeSeconds": number; "expiresAt": string; "controlEpoch": AtomicAmount; "publicMempoolFallbackAllowed": boolean; "controllerBinding"?: ControllerPolicyBindingV2; };

export type PolicyIntentDraft = { "sourceText": string; "extractionProvider": string; "extractionModel": string; "clauses": Array<{ "field": "EXECUTABLE_DEPTH_QUOTE" | "PRICE_BAND_PIPS" | "MAXIMUM_TREASURY_DEPLOYMENT_PIPS" | "MAXIMUM_SLIPPAGE_PIPS" | "MINIMUM_PRICE_X18" | "MAXIMUM_DAILY_TURNOVER_PIPS" | "COOLDOWN_SECONDS"; "operator": "EQ" | "LTE" | "GTE"; "value": string; "unit": "QUOTE_ATOMIC" | "QUOTE_WHOLE_UNITS" | "PIPS" | "PRICE_X18" | "SECONDS"; "sourceStart": number; "sourceEnd": number; "confidencePips": Pips; }>; "ambiguities": Array<string>; "conflicts": Array<string>; "normalizedAt": string; };

export type ProtectedExecutionQuote = { "quoteId": string; "requestId": string; "typedActionIntentHash": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "routeKind": "PRIVATE_AMM" | "RFQ" | "SOLVER" | "PUBLIC_AMM"; "amountIn": PositiveAtomicAmount; "amountOut": PositiveAtomicAmount; "gasCostQuote": AtomicAmount; "providerFeeQuote": AtomicAmount; "maximumSlippagePips": Pips; "expiresAt": string; "partialFillAllowed": boolean; "minimumFillAmount": PositiveAtomicAmount; "settlementAdapterId": string; "signature": string; "evidenceHash": Hash; };

export type ProtectedExecutionProviderBinding = { "providerId": string; "capability": "PRIVATE_RELAY" | "RFQ" | "SOLVER" | "RPC"; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "providerVenueScope": Array<string>; };

export type ProtectedExecutionQuoteRequest = { "requestId": string; "vaultId": string; "chainId": number; "assetIn": Address; "assetOut": Address; "costQuoteAsset": Address; "settlementContract": Address; "settlementAdapterId": string; "amountIn": PositiveAtomicAmount; "maximumSlippagePips": Pips; "expiresAt": string; "createdAt": string; "autonomyPolicyId": string; "autonomyPolicyResourceVersion": Hash; "autonomyPolicyArtifactHash": Hash; "controlEpoch": AtomicAmount; "publicMempoolFallbackAllowed": boolean; "typedActionIntentHash": Hash; "venueBinding": VenueProfileGenerationBinding; "providerBindings": Array<ProtectedExecutionProviderBinding>; };

export type ProtectedExecutionQuoteSet = { "requestId": string; "request": ProtectedExecutionQuoteRequest; "amountIn": PositiveAtomicAmount; "publicMempoolFallbackAllowed": boolean; "quotes": Array<ProtectedExecutionQuote>; "selectedQuoteId"?: string; "unavailableReasons": Array<string>; };

export type ProtectedExecutionTypedAction = { "actionType": "SWAP_EXACT_INPUT_V2"; "chainId": number; "vaultId": string; "settlementAdapterId": string; "settlementContract": Address; "assetIn": Address; "assetOut": Address; "amountIn": PositiveAtomicAmount; "minimumAmountOut": PositiveAtomicAmount; "deadline": string; "quoteId": string; "childLegId": string; "policyControlEpoch": AtomicAmount; "controllerExecution"?: ControllerExecutionBindingV2; };

export type CanonicalEvmExecutionResultV1 = { "schemaVersion": "canonical-evm-execution-result-v1"; "executionSucceeded": boolean; "returnDataHash": Hash; "logsHash": Hash; "stateDeltaHash": Hash; };

export type ProtectedExecutionActionEnvelopeV2 = { "schemaVersion": "protected-execution-action-envelope-v2"; "releaseId": Hash; "chainId": 677 | 968; "planId": string; "planRootHash": Hash; "quoteRequestId": string; "quoteSetArtifactHash": Hash; "autonomyPolicyId": string; "autonomyPolicyResourceVersion": Hash; "autonomyPolicyArtifactHash": Hash; "controlEpoch": AtomicAmount; "childLegId": string; "vaultId": string; "vaultAddress": Address; "controllerAddress": Address; "ownerSafe": Address; "typedAction": ProtectedExecutionTypedAction; "typedActionHash": Hash; "controllerExecution": ControllerExecutionBindingV2; "controllerCalldata": string; "controllerCalldataHash": Hash; };

export type ProtectedExecutionSubmissionAuthorityV2 = { "schemaVersion": "protected-execution-submission-authority-v2"; "releaseAuthority": OperatingSystemSubmissionReleaseAuthorityV2; "actionEnvelope": ProtectedExecutionActionEnvelopeV2; "actionEnvelopeHash": Hash; "policyArtifactHash": Hash; "activatedControllerPolicyHash": Hash; "venueBinding": VenueProfileGenerationBinding; "vaultGeneration": MigrationVaultGenerationBindingV2; "safeVerificationEvidenceHash": Hash; "minimumFinalityDepth": number; "authorizationTransactionHash": Hash; };

export type ProtectedExecutionTransactionReceiptV2 = { "schemaVersion": "protected-execution-transaction-receipt-v2"; "actionEnvelopeHash": Hash; "submissionEvidenceHash": Hash; "transactionHash": Hash; "receiptStatus": 0 | 1; "executionResult": CanonicalEvmExecutionResultV1; "executionResultHash": Hash; "finalizedBlockNumber": AtomicAmount; "finalizedBlockHash": Hash; "finalizedAt": string; "finalityDepth": number; "finalityEvidenceHash": Hash; };

export type ProtectedExecutionLegTransition = { "sequence": number; "childLegId": string; "fromStatus": "PREPARED" | "SUBMITTED" | "FINALIZED_RECONCILED" | "PAUSED" | "FAILED"; "toStatus": "SUBMITTED" | "FINALIZED_RECONCILED" | "PAUSED" | "FAILED"; "previousStateHash": Hash; "observedAt": string; "decodedTypedActionHash"?: Hash; "controllerControlEpoch"?: AtomicAmount; "controllerActivePolicyHash"?: Hash; "submissionEvidenceHash"?: Hash; "submissionAuthority"?: ProtectedExecutionSubmissionAuthorityV2; "transactionHash"?: Hash; "finalityEvidenceHash"?: Hash; "reconciliationEvidenceHash"?: Hash; "failureEvidenceHash"?: Hash; "executionReceipt"?: ProtectedExecutionTransactionReceiptV2; "consumedAmountIn"?: AtomicAmount; "residualAmountIn"?: AtomicAmount; "amountOutReceived"?: AtomicAmount; };

export type ProtectedExecutionPlan = { "planId": string; "quoteRequestId": string; "quoteSetResourceVersion": Hash; "quoteSetArtifactHash": Hash; "autonomyPolicyId": string; "autonomyPolicyResourceVersion": Hash; "autonomyPolicyArtifactHash": Hash; "controlEpoch": AtomicAmount; "publicMempoolFallbackAllowed": boolean; "executionClass": "PREVIEW_ONLY" | "CONTROLLER_TYPED_EXECUTABLE"; "executionUnavailableReasons": Array<string>; "status": "PREPARED" | "IN_PROGRESS" | "COMPLETED" | "PAUSED" | "FAILED_CLOSED"; "selectedQuote"?: ProtectedExecutionQuote; "netAmountOutQuote": AtomicAmount; "childLegs": Array<{ "childLegId": string; "index": number; "amountIn": PositiveAtomicAmount; "minimumAmountOut": PositiveAtomicAmount; "expiresAt": string; "state": "PREPARED" | "SUBMITTED" | "FINALIZED_RECONCILED" | "PAUSED" | "FAILED"; "typedAction": ProtectedExecutionTypedAction; "typedActionHash"?: Hash; "submissionEvidenceHash"?: Hash; "transactionHash"?: Hash; "finalityEvidenceHash"?: Hash; "reconciliationEvidenceHash"?: Hash; "failureEvidenceHash"?: Hash; "executionReceipt"?: ProtectedExecutionTransactionReceiptV2; "consumedAmountIn"?: AtomicAmount; "residualAmountIn"?: AtomicAmount; "amountOutReceived"?: AtomicAmount; }>; "transitions": Array<ProtectedExecutionLegTransition>; "totalInputAmount": AtomicAmount; "totalConsumedAmount": AtomicAmount; "totalResidualAmount": AtomicAmount; "totalUnresolvedAmount": AtomicAmount; "totalAmountOutReceived": AtomicAmount; "fallbackQuoteId"?: string; "requiresSafeApproval": boolean; "pauseReason"?: "PRIVATE_EXECUTION_UNAVAILABLE" | "QUOTE_EXPIRED" | "POLICY_CHANGED"; };

export type StrategyPackage = { "packageId": string; "publisherOrganizationId": string; "name": string; "version": string; "compilerVersion": "strategy-dsl-v1"; "packageContentHash": Hash; "compilerHash": Hash; "definition": StrategyDefinitionV2Input; "supportedAssetIds": Array<string>; "supportedVenueIds": Array<string>; "riskClass": "LOW" | "MODERATE" | "HIGH" | "EXPERIMENTAL"; "performanceAssumptions": Array<string>; "historicalTests": Array<{ "studyId": string; "datasetHash": Hash; "reportHash": Hash; "compilerHash": Hash; "passedAt": string; "passed": true; }>; "forkTests": Array<{ "testRunId": string; "chainId": number; "forkBlockNumber": AtomicAmount; "forkBlockHash": Hash; "rpcQuorumEvidenceHashes": Array<Hash>; "artifactHash": Hash; "compilerHash": Hash; "passedAt": string; "passed": true; }>; "independentReviews": Array<{ "reviewerIdentityId": string; "reviewerName": string; "reviewerOrganization": string; "reviewedPackageContentHash": Hash; "evidenceHash": Hash; "reviewedAt": string; "decision": "APPROVE"; }>; "maximumCapitalQuote": AtomicAmount; "failureConditions": Array<string>; "approvalRegistryEvidence"?: { "approvalId": string; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "packageId": string; "packageVersion": string; "packageContentHash": Hash; "compilerHash": Hash; "reviewSetHash": Hash; "issuedAt": string; "validUntil": string; "signature": string; }; "executionSurface": "DECLARATIVE_NO_NETWORK_NO_SIGNING"; "activationEligibility": "DIGITAL_TWIN_ONLY" | "ACTIVATION_WORKFLOW_ELIGIBLE" | "REVOKED"; "status": "CANDIDATE" | "APPROVED" | "REVOKED"; };

export type PartnerLogoAsset = { "mediaType": "image/png"; "contentBase64": string; "contentHash": Hash; };

export type PartnerTenant = { "partnerId": string; "name": string; "verifiedDomains": Array<string>; "domainVerifications": Array<{ "domain": string; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "challengeHash": Hash; "observedAt": string; "validUntil": string; "signature": string; }>; "domainVerificationHashes": { [key: string]: Hash | undefined; }; "logoAsset"?: PartnerLogoAsset; "accentColor": string; "terminology": { [key: string]: string | undefined; }; "issuerOrganizationIds": Array<string>; "portfolioReaderActorIds": Array<string>; "proposalPreparerActorIds": Array<string>; "reportBrandName": string; "supportEmail"?: string; "contactName"?: string; "description"?: string; };

export type PartnerIssuerConsent = { "consentId": string; "partnerId": string; "partnerOrganizationId": string; "issuerOrganizationId": string; "partnerConfigurationResourceVersion": Hash; "partnerConfigurationArtifactHash": Hash; "portfolioReaderActorIds": Array<string>; "proposalPreparerActorIds": Array<string>; "grantedAt": string; "expiresAt"?: string; "state": "ACTIVE" | "REVOKED"; "revokedAt"?: string; };

export type MarketMakerMandate = { "mandateId": string; "counterpartyName": string; "counterpartyIdentifier": string; "tokenLoanAtomic": AtomicAmount; "tokenLoanValueQuote": AtomicAmount; "stableAllocationQuote": AtomicAmount; "startsAt": string; "endsAt": string; "obligations": Array<{ "obligationId": string; "venueId": string; "minimumDepthQuote": AtomicAmount; "maximumSpreadPips": Pips; "minimumUptimePips": Pips; }>; "reportedInventoryToken": AtomicAmount; "reportedInventoryQuote": AtomicAmount; "returnedToken": AtomicAmount; "returnedTokenValueQuote": AtomicAmount; "repaidQuote": AtomicAmount; "managerCapitalDeployedQuote": PositiveAtomicAmount; "grossReturnsQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "costQuote": AtomicAmount; "counterpartyExposureQuote": AtomicAmount; "counterpartyExposureLimitQuote": PositiveAtomicAmount; "ammBenchmark": { "capitalDeployedQuote": PositiveAtomicAmount; "usableDepthQuote": AtomicAmount; "observedSpreadPips": Pips; "costQuote": AtomicAmount; "reliabilityPips": Pips; "evidenceHashes": Array<Hash>; }; "evidenceHashes": Array<Hash>; };

export type MarketMakerEvidenceObservation = { "observationId": string; "mandateId": string; "sourceKind": "ONCHAIN_WALLET" | "SIGNED_API" | "SIGNED_FILE" | "SIGNED_EXCHANGE"; "observedAt": string; "sourceReferenceHash": Hash; "sourcePayloadHash": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "signature": string; "chainEvidence"?: { "chainId": number; "chainGenesisHash": Hash; "blockNumber": AtomicAmount; "blockHash": Hash; "finality": "FINALIZED"; "rpcQuorumAttestations": Array<VenueRpcQuorumAttestation>; "rpcQuorumVerification"?: VenueRpcQuorumVerification; }; "balances": Array<{ "assetId": string; "amountAtomic": AtomicAmount; "valueQuote": AtomicAmount; }>; "capitalDeployedQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "observedSpreadPips": Pips; "observedUptimePips": Pips; "grossReturnsQuote": AtomicAmount; "feesPaidQuote": AtomicAmount; "returnedToken": AtomicAmount; "returnedTokenValueQuote": AtomicAmount; "repaidQuote": AtomicAmount; "counterpartyExposureQuote": AtomicAmount; "reconciliationStatus": "PENDING" | "MATCHED" | "DISPUTED" | "FINALIZED"; "reconciliationEvidenceHashes": Array<Hash>; "evidenceHashes": Array<Hash>; };

export type MarketMakerEvidenceObservationInput = { "observationId": string; "mandateId": string; "observedAt": string; "sourceReferenceHash": Hash; "sourcePayloadHash": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "signature": string; "balances": Array<{ "assetId": string; "amountAtomic": AtomicAmount; "valueQuote": AtomicAmount; }>; "capitalDeployedQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "observedSpreadPips": Pips; "observedUptimePips": Pips; "grossReturnsQuote": AtomicAmount; "feesPaidQuote": AtomicAmount; "returnedToken": AtomicAmount; "returnedTokenValueQuote": AtomicAmount; "repaidQuote": AtomicAmount; "counterpartyExposureQuote": AtomicAmount; "evidenceHashes": Array<Hash>; "sourceKind": "ONCHAIN_WALLET"; "chainEvidence": { "chainId": number; "chainGenesisHash": Hash; "blockNumber": AtomicAmount; "blockHash": Hash; "finality": "FINALIZED"; "rpcQuorumAttestations": Array<VenueRpcQuorumAttestation>; }; "reconciliationStatus": "PENDING" | "DISPUTED"; "reconciliationEvidenceHashes": Array<Hash>; } | { "observationId": string; "mandateId": string; "observedAt": string; "sourceReferenceHash": Hash; "sourcePayloadHash": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "signature": string; "balances": Array<{ "assetId": string; "amountAtomic": AtomicAmount; "valueQuote": AtomicAmount; }>; "capitalDeployedQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "observedSpreadPips": Pips; "observedUptimePips": Pips; "grossReturnsQuote": AtomicAmount; "feesPaidQuote": AtomicAmount; "returnedToken": AtomicAmount; "returnedTokenValueQuote": AtomicAmount; "repaidQuote": AtomicAmount; "counterpartyExposureQuote": AtomicAmount; "evidenceHashes": Array<Hash>; "sourceKind": "ONCHAIN_WALLET"; "chainEvidence": { "chainId": number; "chainGenesisHash": Hash; "blockNumber": AtomicAmount; "blockHash": Hash; "finality": "FINALIZED"; "rpcQuorumAttestations": Array<VenueRpcQuorumAttestation>; }; "reconciliationStatus": "MATCHED" | "FINALIZED"; "reconciliationEvidenceHashes": Array<Hash>; } | { "observationId": string; "mandateId": string; "observedAt": string; "sourceReferenceHash": Hash; "sourcePayloadHash": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "signature": string; "balances": Array<{ "assetId": string; "amountAtomic": AtomicAmount; "valueQuote": AtomicAmount; }>; "capitalDeployedQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "observedSpreadPips": Pips; "observedUptimePips": Pips; "grossReturnsQuote": AtomicAmount; "feesPaidQuote": AtomicAmount; "returnedToken": AtomicAmount; "returnedTokenValueQuote": AtomicAmount; "repaidQuote": AtomicAmount; "counterpartyExposureQuote": AtomicAmount; "evidenceHashes": Array<Hash>; "sourceKind": "SIGNED_API" | "SIGNED_FILE" | "SIGNED_EXCHANGE"; "reconciliationStatus": "PENDING" | "DISPUTED"; "reconciliationEvidenceHashes": Array<Hash>; } | { "observationId": string; "mandateId": string; "observedAt": string; "sourceReferenceHash": Hash; "sourcePayloadHash": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "signature": string; "balances": Array<{ "assetId": string; "amountAtomic": AtomicAmount; "valueQuote": AtomicAmount; }>; "capitalDeployedQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "observedSpreadPips": Pips; "observedUptimePips": Pips; "grossReturnsQuote": AtomicAmount; "feesPaidQuote": AtomicAmount; "returnedToken": AtomicAmount; "returnedTokenValueQuote": AtomicAmount; "repaidQuote": AtomicAmount; "counterpartyExposureQuote": AtomicAmount; "evidenceHashes": Array<Hash>; "sourceKind": "SIGNED_API" | "SIGNED_FILE" | "SIGNED_EXCHANGE"; "reconciliationStatus": "MATCHED" | "FINALIZED"; "reconciliationEvidenceHashes": Array<Hash>; };

export type MarketMakerOversight = { "oversightVersion": "market-maker-oversight-v1"; "mandateId": string; "observationId"?: string; "reconciliationStatus": "PENDING" | "MATCHED" | "DISPUTED" | "FINALIZED"; "outstandingTokenLoanAtomic": AtomicAmount; "outstandingTokenLoanValueQuote": AtomicAmount; "outstandingStableAllocationQuote": AtomicAmount; "reportedAssetValueQuote": AtomicAmount; "grossReturnsQuote": AtomicAmount; "netReturnsQuote": SignedAtomicAmount; "counterpartyExposureQuote": AtomicAmount; "counterpartyRiskPips": Pips; "counterpartyExposureLimitBreached": boolean; "manager": { "capitalDeployedQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "spreadPips": Pips; "costQuote": AtomicAmount; "costPerDepthPips": Pips; "capitalEfficiencyPips": Pips; "reliabilityPips": Pips; }; "ammBenchmark": { "capitalDeployedQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "spreadPips": Pips; "costQuote": AtomicAmount; "costPerDepthPips": Pips; "capitalEfficiencyPips": Pips; "reliabilityPips": Pips; }; "managerDepthAdvantageQuote": SignedAtomicAmount; "managerSpreadAdvantagePips": number; "managerCostPerDepthAdvantagePips": number; "managerCapitalEfficiencyAdvantagePips": number; "obligationAttainment": Array<{ "obligationId": string; "venueId": string; "depthAttainmentPips": Pips; "spreadAttained": boolean; "uptimeAttained": boolean; "slaAttained": boolean; }>; "provenanceHashes": Array<Hash>; "authorityBoundary": "MONITORING_ONLY"; "custodyAuthorityGranted": false; "cexTradingAuthorityGranted": false; };

export type IncentiveRecommendation = "INCREASE" | "REDUCE" | "RETARGET" | "CHANGE_POOL" | "CHANGE_RANGES" | "REPLACE_WITH_TREASURY_LIQUIDITY" | "MAINTAIN";

export type IncentiveProgram = { "programId": string; "venueId": string; "startsAt": string; "endsAt": string; "incentivesPaidQuote": PositiveAtomicAmount; "claimedRewardsQuote": AtomicAmount; "baseline": { "baselineId": string; "method": "PRE_PROGRAM_WINDOW" | "MATCHED_CONTROL" | "FROZEN_COUNTERFACTUAL"; "windowStartsAt": string; "windowEndsAt": string; "frozenAt": string; "liquidityQuote": AtomicAmount; "volumeQuote": AtomicAmount; "slippagePips": Pips; "evidenceHashes": Array<Hash>; }; "observedLiquidityQuote": AtomicAmount; "observedVolumeQuote": AtomicAmount; "observedSlippagePips": Pips; "observedAt": string; "observationEvidenceHashes": Array<Hash>; "retainedLiquidityQuote": AtomicAmount; "retentionObservedAt": string; "retentionEvidenceHashes": Array<Hash>; "verifiedLiquidityDays": number; "confidencePips": Pips; "confidenceMethodology": string; "confidenceEvidenceHashes": Array<Hash>; "requestedPoolId"?: string; "requestedRangeId"?: string; "adapterAuthorization"?: { "adapterId": string; "venueId": string; "adapterAddress": Address; "adapterRuntimeHash": Hash; "auditHash": Hash; "adapterManifestHash": Hash; "releasedManifestDigest": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "issuedAt": string; "validUntil": string; "allowedRecommendations": Array<IncentiveRecommendation>; "signature": string; }; };

export type IncentiveOptimization = { "optimizerVersion": "incentive-optimizer-v1"; "programId": string; "incrementalLiquidityQuote": SignedAtomicAmount; "incrementalVolumeQuote": SignedAtomicAmount; "incrementalLiquidityRangeQuote": { "low": SignedAtomicAmount; "high": SignedAtomicAmount; }; "incrementalVolumeRangeQuote": { "low": SignedAtomicAmount; "high": SignedAtomicAmount; }; "slippageImprovementPips": number; "claimRatePips": Pips; "retentionPips": Pips; "costPerVerifiedLiquidityDayQuote": AtomicAmount; "mercenaryRiskPips": Pips; "recommendation": IncentiveRecommendation; "baselineEvidenceHashes": Array<Hash>; "measurementEvidenceHashes": Array<Hash>; "confidenceEvidenceHashes": Array<Hash>; "reasons": Array<string>; };

export type LiquidityPassportRecordBinding = { "recordId": string; "recordVersion": number; "resourceVersion": Hash; "artifactHash": Hash; };

export type LiquidityPassportSourceBindings = { "marketQualityScore": LiquidityPassportRecordBinding; "depthRows": Array<{ "rowIndex": number; "sourceKind": "VENUE_OBSERVATION" | "SIMULATION_STUDY"; "source": LiquidityPassportRecordBinding; "venueProfile"?: LiquidityPassportRecordBinding; "simulationVariant"?: "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "sourceEvidenceHash": Hash; }>; "autonomyPolicy": LiquidityPassportRecordBinding; "positionReconciliation": { "vaultId": string; "vaultRecordHash": Hash; "vaultUpdatedAt": string; "snapshotId": string; "snapshotHash": Hash; "snapshotCapturedAt": string; "reconciliationRunId": string; "reconciliationEvidenceHash": Hash; "reconciliationBlockHash": Hash; }; "incidents": { "v1IncidentEvidenceHashes": Array<Hash>; "anomalyEvidenceHashes": Array<Hash>; "anomalyRecords": Array<LiquidityPassportRecordBinding>; }; "treasuryEntries": Array<LiquidityPassportRecordBinding>; "marketMakerEvidence": Array<{ "mandate": LiquidityPassportRecordBinding; "observationEventId": string; "observationArtifactHash": Hash; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "observedAt": string; }>; "reportArtifacts": Array<{ "reportId": string; "contentHash": Hash; "bundleHash": Hash; "publicationHash"?: Hash; }>; };

export type LiquidityPassport = { "passportVersion": "liquidity-passport-v1"; "artifactRendererVersion": "liquidity-passport-artifacts-v1" | "liquidity-passport-artifacts-v2"; "signatureAlgorithm": "Ed25519"; "signerProviderId": string; "signerKeyResourceVersion": Hash; "slug": string; "vaultId": string; "issuerName": string; "reportBrand"?: { "partnerId": string; "name": string; "accentColor": string; "logoContentHash"?: Hash; "sourceBinding"?: { "partnerOrganizationId": string; "partnerConfigurationResourceVersion": Hash; "partnerConfigurationArtifactHash": Hash; "consentId": string; "consentResourceVersion": Hash; "consentArtifactHash": Hash; }; }; "generatedAt": string; "validUntil": string; "marketQualityScore": MarketQualityScore; "usableDepthByTradeSize": Array<{ "tradeSizeQuote": AtomicAmount; "buySlippagePips": Pips; "sellSlippagePips": Pips; }>; "historicalReliabilityPips": Pips; "policyCompliancePips": Pips | null; "policyLimits"?: { "level": 0 | 1 | 2 | 3 | 4; "maximumAmountPerTransaction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; "maximumSlippagePips": Pips; "approvedContracts": Array<Address>; "approvedAssets": Array<Address>; "approvedAdapterIds": Array<string>; "minimumSecondsBetweenActions": number; "minimumPriceX18"?: AtomicAmount; "maximumPriceX18"?: AtomicAmount; "oracleMaximumAgeSeconds": number; "expiresAt": string; "controlEpoch": AtomicAmount; "publicMempoolFallbackAllowed": boolean; }; "reconciledPositionCount": number; "majorIncidentCount": number; "treasuryOwnedLiquidityQuote"?: AtomicAmount; "rentedLiquidityQuote"?: AtomicAmount; "incidentDetails"?: { "v1IncidentEvidenceHashes": Array<Hash>; "anomalies": Array<{ "detectorVersion": "robust-mad-v1"; "kind": "LIQUIDITY_DISAPPEARANCE" | "ONE_SIDED_FLOW" | "INACTIVE_RANGE" | "STABLECOIN_DEPEG" | "ORACLE_DISAGREEMENT" | "INVENTORY_ACCUMULATION" | "EXCESSIVE_TURNOVER" | "MANIPULATION_INDICATOR" | "SIMULATED_REALIZED_DIVERGENCE"; "severity": "INFO" | "WARNING" | "CRITICAL"; "artifactHash": Hash; }>; }; "externalManagerExposureQuote"?: AtomicAmount; "externalManagerNames"?: Array<string>; "dataFreshnessSeconds": number; "disclosure": { "showTreasuryOwnership": boolean; "showExternalManagerNames": boolean; "showIncidentDetails": boolean; "showPolicyLimits": boolean; }; "reportHashes": Array<Hash>; "sourceBindings": LiquidityPassportSourceBindings; "resultsRegistryProviderId"?: string; "resultsRegistryProviderResourceVersion"?: Hash; "resultsRegistryProviderAttestationHash"?: Hash; "resultsRegistryCommitmentHash"?: Hash; "resultsRegistryReceipt"?: { "receiptVersion": "liquidity-passport-results-registry-receipt-v1"; "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "passportSubjectHash": Hash; "commitmentHash": Hash; "issuedAt": string; "signature": string; }; "supersedesPassportHash"?: Hash; "contentHash": Hash; "signature": string; };

export type OperatingSystemArtifact = { "organizationId": string; "contentHash": Hash; "recordType": string; "recordId": string; "recordVersion": number; "objectKey": string; "mediaType": string; "byteSize": AtomicAmount; "sourceHashes": Array<Hash>; "retentionUntil"?: string; "createdAt": string; "createdBy": string; };

export type PublicPartnerBrand = { "domain": string; "partnerId": string; "name": string; "reportBrandName": string; "supportEmail"?: string; "logoPath": string | null; "terminology": { [key: string]: string | undefined; }; "accentTokens": { "darkPrimary": string; "darkPrimaryForeground": "#000000" | "#ffffff"; "lightPrimary": string; "lightPrimaryForeground": "#000000" | "#ffffff"; }; "verificationHash": Hash; "configurationArtifactHash": Hash; "configurationVersion": number; "validUntil": string; };

export type ApiError = { "code": string; "message": string; "remediation"?: string; "correlationId": string; "retryable": boolean; "fieldErrors"?: { [key: string]: Array<string> | undefined; }; };

export type PaginationMeta = { "count": number; "hasMore": boolean; "nextCursor"?: string; };

export type OperatingSystemEvent = { "organizationId": string; "eventId": string; "recordType": OperatingSystemRecordType; "recordId": string; "eventKind": string; "payload": { [key: string]: JsonValue | undefined; }; "artifactHash": Hash; "createdBy": string; "actorRole": string; "reason": string; "requestId": string; "createdAt": string; };

export type OperatingSystemJob = { "organizationId": string; "jobId": string; "lane": "QUANTITATIVE_STUDIES" | "EXTERNAL_VENUE_INDEXING" | "ANOMALY_DETECTION" | "PROPOSAL_SCHEDULING" | "PROTECTED_EXECUTION_QUOTES" | "WEBHOOK_DELIVERY" | "REPORTING" | "PARTNER_INTEGRATIONS" | "AGENT_ORCHESTRATION"; "aggregateType": string; "aggregateId": string; "requestPayload": { [key: string]: JsonValue | undefined; }; "requestHash": Hash; "state": "PENDING" | "LEASED" | "COMPLETED" | "FAILED" | "DEAD_LETTER"; "attempts": number; "maximumAttempts": number; "availableAt": string; "leaseHolder"?: string; "leaseExpiresAt"?: string; "fencingToken": string; "result"?: { [key: string]: JsonValue | undefined; }; "lastErrorCode"?: string; "createdAt": string; "updatedAt": string; "completedAt"?: string; };

export type OperatingSystemProvider = { "organizationId": string; "providerId": string; "capability": "AI_EXTRACTION" | "RPC" | "ORACLE" | "PRIVATE_RELAY" | "RFQ" | "SOLVER" | "OBJECT_STORAGE" | "WEBHOOK" | "MARKET_MAKER" | "INCENTIVE_ADAPTER" | "PARTNER" | "ISSUER_SIGNING" | "RESULTS_REGISTRY" | "STRATEGY_APPROVAL_REGISTRY" | "DOMAIN_VERIFICATION" | "EXECUTION_ATTRIBUTION"; "chainScope": Array<number>; "venueScope": Array<string>; "attestationHash": Hash; "timeoutMilliseconds": number; "maximumAgeSeconds": number; "healthState": "HEALTHY" | "DEGRADED" | "OPEN_CIRCUIT" | "DISABLED"; "consecutiveFailures": number; "circuitOpenUntil"?: string; "responsePublicKey": string; "updatedAt": string; "resourceVersion": Hash; };

export type StudyShare = { "slug": string; "studyId": string; "visibility": "PRIVATE" | "PUBLIC"; "expiresAt": string; "disclosure": { "includeDrivers": boolean; "includeTreasury": boolean; "includePolicy": boolean; }; "approvedBy": string; };

export type DeveloperCredential = { "credentialId": string; "label": string; "kind": "API_KEY" | "OAUTH_CLIENT"; "scopes": Array<"scores:read" | "studies:read" | "studies:write" | "strategies:validate" | "policies:compile" | "policies:check" | "proposals:read" | "proposals:prepare" | "vaults:read" | "receipts:read" | "proof:read" | "alerts:read" | "webhooks:manage">; "keyPrefix": string; "secretHash": Hash; "createdAt": string; "expiresAt"?: string; "rotatedAt"?: string; "supersededSecretHash"?: Hash; };

export type WebhookSubscription = { "subscriptionId": string; "url": string; "eventTypes": Array<string>; "secretHash": Hash; "active": boolean; "maximumAttempts": 8; "createdAt": string; "secretReference": string; };

export type QualifiedVaultV2 = { "id": string; "organizationId": string; "name": string; "projectToken": Address; "quoteToken": Address; "ownerSafe": Address; "poolAddress": Address | null; "lifecycle": string; "mode": string; "runtimeVersion": string; "launchContext": { [key: string]: JsonValue | undefined; } | null; "capitalCapAtomic": AtomicAmount | null; "contracts": { [key: string]: JsonValue | undefined; }; "deployment": { [key: string]: JsonValue | undefined; }; "policy": { [key: string]: JsonValue | undefined; } | null; "control": { [key: string]: JsonValue | undefined; }; "createdAt": string; "updatedAt": string; "artifactHash": Hash; "resourceVersion": Hash; };

export type ExecutionReceiptV2 = { "id": string; "organizationId": string; "vaultId": string; "proposalHash": Hash | null; "transactionHash": Hash | null; "status": "FAILED_RECONCILED" | "FINALIZED_RECONCILED_ATTRIBUTED" | "FINALIZED_RECONCILED" | "FINALIZED_PENDING_RECONCILIATION" | "INCLUDED_PENDING_FINALITY"; "inclusion": { [key: string]: JsonValue | undefined; } | null; "finality": { [key: string]: JsonValue | undefined; } | null; "reconciliation": { [key: string]: JsonValue | undefined; } | null; "attribution": { [key: string]: JsonValue | undefined; } | null; "failureAttribution": { [key: string]: JsonValue | undefined; } | null; "executionAttempts": Array<{ [key: string]: JsonValue | undefined; }>; "sourceProposalState": string; "createdAt": string; "updatedAt": string; "artifactHash": Hash; "resourceVersion": Hash; };

export type OAuthTokenResponse = { "access_token": string; "token_type": "Bearer"; "expires_in": number; "scope": string; };

export type OperatingSystemStatus = { "status": "AVAILABLE"; "schemaVersion": "klineo-token-liquidity-os-v2"; "liveAuthority": "SIGNED_V2_BOUNDARY" | "FAIL_CLOSED"; "executionAdapters": { [key: string]: JsonValue | undefined; }; "release": { [key: string]: JsonValue | undefined; }; "checkedAt": string; };

export type StrategyCompilation = { "compilerVersion": "strategy-dsl-v1"; "valid": boolean; "allocationPips": Pips; "issues": Array<{ "code": string; "severity": "ERROR" | "WARNING"; "path": string; "message": string; }>; "enforceability": Array<{ "field": string; "class": "ONCHAIN" | "DETERMINISTIC_OFFCHAIN" | "MANUAL_APPROVAL"; "reason": string; }>; "activationClass": "BOUNDED_AUTOPILOT_ELIGIBLE" | "SAFE_APPROVAL_ONLY" | "INVALID"; };

export type CompiledPolicyIntent = { "compilerVersion": "policy-intent-compiler-v1"; "valid": boolean; "clauses": Array<{ "field": string; "operator": "EQ" | "LTE" | "GTE"; "value": string; "unit": "QUOTE_ATOMIC" | "QUOTE_WHOLE_UNITS" | "PIPS" | "PRICE_X18" | "SECONDS"; "sourceStart": number; "sourceEnd": number; "confidencePips": Pips; "enforceability": "ONCHAIN" | "DETERMINISTIC_OFFCHAIN" | "MANUAL_APPROVAL"; }>; "errors": Array<string>; "warnings": Array<string>; "confirmationSummary": Array<string>; };

export type OperatingSystemWorkspace = { "schemaVersion": "klineo-token-liquidity-os-v1"; "role": string; "navigation": Array<"OPERATE" | "PLAN" | "SIMULATE" | "STRATEGIES" | "PROPOSALS" | "INTELLIGENCE" | "PROVE" | "PLATFORM">; "releaseTrains": Array<{ [key: string]: JsonValue | undefined; }>; "counts": { [key: string]: number | undefined; }; "unavailable": Array<{ "recordType": OperatingSystemRecordType; "recordId": string; "reason": string; }>; "workers": { "pending": number; "deadLetter": number; }; "providers": { "configured": number; "healthy": number; "degraded": Array<{ "providerId": string; "capability": "AI_EXTRACTION" | "RPC" | "ORACLE" | "PRIVATE_RELAY" | "RFQ" | "SOLVER" | "OBJECT_STORAGE" | "WEBHOOK" | "MARKET_MAKER" | "INCENTIVE_ADAPTER" | "PARTNER" | "ISSUER_SIGNING" | "RESULTS_REGISTRY" | "STRATEGY_APPROVAL_REGISTRY" | "DOMAIN_VERIFICATION" | "EXECUTION_ATTRIBUTION"; "healthState": string; }>; }; "authority": { "aiExecutable": false; "issuerSafeRequired": true; "arbitraryCalldataAllowed": false; }; };

export type UnifiedLiquidityMap = { "capturedAt": string; "availability": "AVAILABLE" | "DEGRADED" | "UNAVAILABLE"; "deployedCapitalQuote": AtomicAmount; "activeCapitalQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "venues": Array<{ "venueId": string; "assetMappingId": string; "deployedCapitalQuote": AtomicAmount; "activeCapitalQuote": AtomicAmount; "usableDepthQuote": AtomicAmount; "freshnessSeconds": number; "maximumAgeSeconds": number; "freshness": "FRESH" | "STALE" | "FUTURE" | "UNVERIFIED"; "profileStatus": "DRAFT" | "VALIDATED" | "ACTIVE" | "PAUSED" | "COMPLETED" | "EXPIRED" | "REVOKED" | "SUPERSEDED" | "UNAVAILABLE"; "sourceProfileGenerationMatches": boolean; "includedInTotals": boolean; [key: string]: JsonValue | undefined; }>; "warnings": Array<string>; };

export type ProposalDecisionResult = { "proposal": RecordEnvelope & { "payload": ProposalWorkspace; [key: string]: JsonValue | undefined; }; "decision": OperatingSystemEvent; "approvalProgress"?: { "approved": number; "required": number; }; "rejectionReason"?: string; "safeAuthorityGranted": false; };

export type ProposalSafeSubmissionResult = { "proposal": RecordEnvelope & { "payload": ProposalWorkspace; [key: string]: JsonValue | undefined; }; "safeAuthorityEvidence": OperatingSystemEvent; "safeTransactionRegistered": true; "executionPerformed": false; };

export type ProposalComparison = { "comparedAt": string; "proposals": Array<{ "id": string; "version": number; "title": string; "expectedImprovementQuote": SignedAtomicAmount; "maximumDownsideQuote": AtomicAmount; "costOfNoActionQuote": SignedAtomicAmount; "beforeDepthQuote": AtomicAmount; "afterDepthQuote": AtomicAmount; "approvalProgress": string; "expiresAt": string; "artifactHash": Hash; }>; "immutableComparisonHash": Hash; "executionAuthorityGranted": false; };

export type LaunchTimeline = { "launchPlanId": string; "resourceVersion": Hash; "timeline": Array<{ "id": string; "kind": "PRE_LAUNCH_SIMULATION" | "INITIAL_FUNDING" | "TGE" | "FIRST_24_HOURS" | "FIRST_7_DAYS" | "MAINTENANCE_TRANSITION" | "EXCHANGE_LISTING" | "INCENTIVE_CHANGE" | "TOKEN_UNLOCK" | "TREASURY_DIVERSIFICATION"; "scheduledAt": string; "reviewOwnerId": string; "dependsOn": Array<string>; "requiresReview": boolean; "status": "PLANNED" | "READY" | "IN_REVIEW" | "COMPLETED" | "BLOCKED" | "CANCELLED"; "evidenceHashes": Array<Hash>; "recommendationTrigger"?: string; "reminderLeadSeconds"?: number; "completedAt"?: string; "completionReceiptHash"?: Hash; "dependenciesComplete": boolean; }>; "evidenceHash": Hash; };

export type LaunchWorkspaceSeed = { "issuerIntent": RecordEnvelope & { "payload": IssuerIntent; [key: string]: JsonValue | undefined; }; "capitalRequirement": RecordEnvelope & { "payload": CapitalRequirementStudy; [key: string]: JsonValue | undefined; }; "strategy": RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }; "strategyCompilation": StrategyCompilation; "simulationStudy": RecordEnvelope & { "payload": SimulationStudy; [key: string]: JsonValue | undefined; }; "policyDraft": RecordEnvelope & { "payload": PolicyIntentDraft; [key: string]: JsonValue | undefined; }; "fundingProposal": null; "fundingProposalTemplate": { [key: string]: JsonValue | undefined; }; "proposalPreparationBlockedBy": Array<string>; "vaultQualification": { [key: string]: JsonValue | undefined; }; "safeTransactionPrepared": false; "executionPerformed": false; };

export type MigrationPlanStateResult = { "planId": string; "planResourceVersion": Hash; "state": MigrationPlanExecutionState; "stateHash": Hash; "executionClass": string; "executionAuthorized": false; "readyLegIds": Array<string>; };

export type MigrationTransitionResult = { "event": OperatingSystemEvent; "state": MigrationPlanExecutionState; "stateHash": Hash; "executionClass": string; "executionAuthorized": true; "evidenceAuthority": "SERVER_VERIFIED_LEG_SPECIFIC"; "evidenceHashes": Array<Hash>; };

export type PolicyCompilationResult = { "compilation": CompiledPolicyIntent; "executable": false; "nextRequiredGates": Array<"USER_CONFIRMATION" | "REVIEW" | "SIMULATION" | "TIMELOCK" | "ISSUER_SAFE">; };

export type PolicyDraftResult = { "draft": RecordEnvelope & { "payload": PolicyIntentDraft; [key: string]: JsonValue | undefined; }; "compilationPreview": CompiledPolicyIntent; "executable": false; };

export type PolicyCheckResult = { "check": { "compilerVersion": "autonomy-policy-check-v1"; "valid": boolean; "errors": Array<string>; "authorityExpansion": boolean; "exactPolicyHash": Hash; "executable": false; "activationGates": Array<string>; "checkedAt": string; }; "evidence": RecordEnvelope & { "payload": PolicyIntentDraft; [key: string]: JsonValue | undefined; }; };

export type PartnerPortfolio = { "schemaVersion": "partner-portfolio-view-v2"; "partnerId": string; "partnerConfigurationResourceVersion": Hash; "partnerConfigurationArtifactHash": Hash; "brand": { "name": string; "reportBrandName": string; "accentColor": string; "verifiedDomains": Array<string>; }; "issuers": Array<{ "issuerOrganizationId": string; "availability": "AVAILABLE"; "consentArtifactHash": Hash; "consentResourceVersion": Hash; "consentStatus": "ACTIVE"; "consentExpiresAt": string | null; "proposalPreparationScope": "DECLARED" | "NOT_DECLARED"; "marketQuality": { "score": number; "capturedAt": string; "coveragePips": Pips; "artifactHash": Hash; } | { "availability": "UNAVAILABLE"; }; "venueCount": number; "proposals": Array<{ "proposalId": string; "title": string; "status": OperatingSystemRecordStatus; "expiresAt": string; "artifactHash": Hash; }>; } | { "issuerOrganizationId": string; "availability": "UNAVAILABLE_NO_BILATERAL_CONSENT"; }>; "generatedAt": string; "custodyAuthorityGranted": false; "crossIssuerMutationAuthorityGranted": false; };

export type PartnerProposalPreparationResult = { "preparation": OperatingSystemEvent; "deliveryJobId": string | null; "issuerImportAndStandardApprovalRequired": true; "safeAuthorityGranted": false; "custodyAuthorityGranted": false; };

export type MarketMakerEvidenceResult = { "observation": OperatingSystemEvent; "oversight": MarketMakerOversight; "comparison": Array<{ [key: string]: JsonValue | undefined; }>; "provenancePreserved": true; "reconciliationStatus": "PENDING" | "MATCHED" | "DISPUTED" | "FINALIZED"; "custodyAuthorityGranted": false; "cexTradingAuthorityGranted": false; };

export type IncentiveOptimizationResult = { "program": RecordEnvelope & { "payload": IncentiveProgram; [key: string]: JsonValue | undefined; }; "optimization": IncentiveOptimization; "workflow": { "mode": "TYPED_ADAPTER_ACTIVATION_REVIEW" | "OPERATIONAL_PROPOSAL_PREPARATION"; "preparationHash": Hash; "evidenceEventId": string; [key: string]: JsonValue | undefined; }; "executionAuthority": "STANDARD_TYPED_ADAPTER_ACTIVATION_WORKFLOW" | "OPERATIONAL_PROPOSAL_ONLY"; "executionPerformed": false; };

export type PublicPassportResult = { "passport": LiquidityPassport; "publication": { "version": number; "artifactHash": Hash; "publishedAt": string; "supersedesVersion": number | null; }; "verification": { "signatureValid": true; "signatureAlgorithm": "Ed25519"; "signerProviderId": string; "signerKeyResourceVersion": Hash; "signerAttestationHash": Hash; "responsePublicKey": string; "publicKeyFingerprint": Hash; "trustAnchorState": "CURRENT" | "ROTATED"; "verifiedAt": string; }; };

export type LiquidityPassportVerificationBundle = { "schemaVersion": "klineo-liquidity-passport-verification-bundle-v1"; "passport": LiquidityPassport; "publication": { "version": number; "artifactHash": Hash; "publishedAt": string; "supersedesVersion": number | null; }; "verification": { "signatureValid": true; "signatureAlgorithm": "Ed25519"; "signerProviderId": string; "signerKeyResourceVersion": Hash; "signerAttestationHash": Hash; "responsePublicKey": string; "publicKeyFingerprint": Hash; "trustAnchorState": "CURRENT" | "ROTATED"; "verifiedAt": string; }; "artifacts": Array<{ "format": "JSON" | "HTML" | "PDF" | "CSV"; "mediaType": string; "fileName": string; "contentHash": Hash; "byteSize": AtomicAmount; "objectKey": string; "sourceHashes": Array<Hash>; "providerEvidence": PersistedProviderGatewayEvidence; "downloadPath": string; }>; "sourceReportHashes": Array<Hash>; "resultsRegistryCommitment": { "receiptVersion": "liquidity-passport-results-registry-receipt-v1"; "signatureAlgorithm": "Ed25519"; "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "responsePublicKey": string; "publicKeyFingerprint": Hash; "trustAnchorState": "CURRENT" | "ROTATED"; "passportSubjectHash": Hash; "commitmentHash": Hash; "issuedAt": string; "receiptSignature": string; "verificationState": "PROVIDER_SIGNATURE_VERIFIED"; } | null; };

export type SharedSimulationStudy = { "share": { "slug": string; "visibility": "PRIVATE" | "PUBLIC"; "expiresAt": string; "disclosure": { "includeDrivers": boolean; "includeTreasury": boolean; "includePolicy": boolean; }; }; "study": { "id": string; "version": number; "status": OperatingSystemRecordStatus; "payload": DisclosedSimulationStudy; "artifactHash": Hash; "sourceArtifactHash": Hash; "updatedAt": string; }; "disclosure": { "includeDrivers": boolean; "includeTreasury": boolean; "includePolicy": boolean; }; };

export type ProofResource = { "id": string; "kind": "LIQUIDITY_PASSPORT"; "status": OperatingSystemRecordStatus; "artifactHash": Hash; "resourceVersion": Hash; "createdAt": string; "updatedAt": string; "record": RecordEnvelope & { "payload": LiquidityPassport; [key: string]: JsonValue | undefined; }; } | { "id": string; "kind": "CONTENT_ADDRESSED_ARTIFACT"; "status": "IMMUTABLE"; "artifactHash": Hash; "resourceVersion": Hash; "createdAt": string; "updatedAt": string; "artifact": OperatingSystemArtifact; };

export type OpenApiDocument = { "openapi": string; "info": { [key: string]: JsonValue | undefined; }; "servers"?: Array<{ [key: string]: JsonValue | undefined; }>; "paths": { [key: string]: { [key: string]: JsonValue | undefined; } | undefined; }; "components": { [key: string]: JsonValue | undefined; }; };

export type SimulationStudyRequest = { "issuerIntentId": string; "expectedIssuerIntentResourceVersion": Hash; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "startingPortfolioQuote": PositiveAtomicAmount; "startingDepthQuote": PositiveAtomicAmount; "startingInventoryPips": Pips; "scenario": ScenarioDefinition; "reason": string; };

export type SandboxSimulationStudyRequest = { "intent": IssuerIntent; "seed": string; "pathCount": 2000; "stepCount": number; "startingPortfolioQuote": PositiveAtomicAmount; "startingDepthQuote": PositiveAtomicAmount; "startingInventoryPips": Pips; "scenario": ScenarioDefinition; "reason": string; };

export type StudyShareRequest = { "visibility": "PRIVATE"; "expiresAt": string; "disclosure": { "includeDrivers": boolean; "includeTreasury": boolean; "includePolicy": boolean; }; "reason": string; } | { "slug"?: string; "visibility": "PUBLIC"; "expiresAt": string; "disclosure": { "includeDrivers": boolean; "includeTreasury": boolean; "includePolicy": boolean; }; "reason": string; };

export type SignedStudyReportRequest = { "formats": Array<"JSON" | "PDF" | "CSV">; "disclosure": { "includeDrivers": boolean; "includeTreasury": boolean; "includePolicy": boolean; }; "reason": string; };

export type StrategyProposalAdmissionRequest = { "issuerIntentId": string; "simulationStudyId": string; "policyIntentDraftId": string; "oracleEvidence": { "providerId": string; "providerResourceVersion": Hash; "observedAt": string; "payloadHash": Hash; "signature": string; }; "reason": string; };

export type ProposalCommentRequest = { "body": string; "mentions": Array<string>; "supersedesCommentId"?: string; "reason": string; };

export type ProposalDecisionRequest = { "decision": "APPROVE"; "evidenceHash": Hash; "reason": string; } | { "decision": "REJECT"; "rejectionReason": string; "evidenceHash"?: Hash; "reason": string; };

export type ProposalSafeSubmissionRequest = { "reason": string; };

export type ProposalComparisonRequest = { "proposalIds": Array<string>; "reason": string; };

export type LaunchPlanRequest = { "name": string; "tokenSupply": PositiveAtomicAmount; "treasuryAllocation": PositiveAtomicAmount; "launchValuationQuote": PositiveAtomicAmount; "liquidityBudgetQuote": PositiveAtomicAmount; "expectedInitialDemandQuote": PositiveAtomicAmount; "targetTradeSizeQuote": PositiveAtomicAmount; "maximumInitialSlippagePips": number; "acceptableInitialVolatilityPips": Pips; "initialPriceX18": PositiveAtomicAmount; "unlocks": Array<UnlockTranche>; "reviewOwnerId": string; "launchAt": string; "reason": string; };

export type TimelineEventRequest = { "payload": LaunchTimelineEventCreate; "reason": string; };

export type TimelineCompletionRequest = { "completedAt": string; "completionReceiptHash": Hash; "evidenceHashes"?: Array<Hash>; "reason": string; };

export type LaunchWorkspaceSeedRequest = { "vaultId": string; "projectTokenAddress": Address; "quoteTokenAddress": Address; "vaultAddress": Address; "quoteSymbol": string; "actionDeadline"?: string; "reason": string; };

export type UnlockImpactRequest = { "sourceLaunchPlanId": string; "unlockIds"?: Array<string>; "sourceObservation": UnlockImpactSourceObservation; "reason": string; } | { "unlocks": Array<UnlockTranche>; "sourceObservation": UnlockImpactSourceObservation; "reason": string; };

export type MarketQualityRequest = { "vaultId": string; "capturedAt": string; "rawMetrics": MarketQualityRawMetrics; "sourceBindings": { "venueObservationIds": Array<string>; "executionAttributionIds": Array<string>; }; "cohortEvidence"?: { "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "cohortDefinitionId": string; "cohortDefinitionHash": Hash; "observedAt": string; "issuers": Array<{ "issuerCommitmentHash": Hash; "score": number; "eligibilityEvidenceHash": Hash; }>; "signature": string; }; "reason": string; };

export type ExecutionAttributionRequest = { "proposalId": string; "observationEvidence": { "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "observedAt": string; "payloadHash": Hash; "payload": { "schemaVersion": "execution-attribution-observation-v1"; "proposalId": string; "transactionHash": Hash; "observationHorizons": Array<{ "kind": "IMMEDIATE" | "ADVERSE_SELECTION" | "RECOVERY"; "endedAt": string; "evidenceHash": Hash; }>; "adverseSelectionQuote": SignedAtomicAmount; "evidenceHashes": Array<Hash>; }; "signature": string; }; "reason": string; };

export type AnomalyDetectionRequest = { "subject": { "kind": "VAULT"; "vaultId": string; }; "kind": "LIQUIDITY_DISAPPEARANCE" | "ONE_SIDED_FLOW" | "INACTIVE_RANGE" | "STABLECOIN_DEPEG" | "ORACLE_DISAGREEMENT" | "INVENTORY_ACCUMULATION" | "EXCESSIVE_TURNOVER" | "MANIPULATION_INDICATOR" | "SIMULATED_REALIZED_DIVERGENCE"; "observations": Array<{ "capturedAt": string; "value": SignedAtomicAmount; "evidenceHash": Hash; }>; "currentObservation": { "capturedAt": string; "value": SignedAtomicAmount; "evidenceHash": Hash; }; "minimumObservations": number; "thresholdMadMultiples": number; "providerEvidence": { "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "observedAt": string; "payloadHash": Hash; "signature": string; }; "reason": string; };

export type CapitalRequirementRequest = { "issuerIntentId": string; "reason": string; };

export type CapitalIntentSeedRequest = { "targetIssuerIntentId"?: string; "reason": string; };

export type CapitalLaunchSeedRequest = { "targetLaunchPlanId"?: string; "name": string; "tokenSupply": PositiveAtomicAmount; "treasuryAllocation": PositiveAtomicAmount; "launchValuationQuote": PositiveAtomicAmount; "expectedInitialDemandQuote": PositiveAtomicAmount; "initialPriceX18": PositiveAtomicAmount; "unlocks": Array<UnlockTranche>; "reviewOwnerId": string; "launchAt": string; "reason": string; };

export type CapitalReservationRequest = { "reservationKind": "MINIMUM_CAPITAL" | "STABLE_RESERVE"; "entryId": string; "bucket": "OPERATING_RESERVE" | "EMERGENCY_RESERVE" | "LIQUIDITY_CAPITAL" | "DIVERSIFICATION_CAPITAL" | "INCENTIVE_BUDGET" | "STRATEGIC_RESERVE"; "asset": Address; "sourceId": string; "sourceObservationId": string; "capitalContainerId": string; "custodyLocationId": string; "obligationIds": Array<string>; "oracleSourceId": string; "oracleProviderResourceVersion": Hash; "oracleAttestationHash": Hash; "oracleEvidenceHash": Hash; "oracleSignature": string; "oracleObservedAt": string; "oracleMaximumAgeSeconds": number; "oracleConfidencePips": Pips; "bridgeHaircutPips": Pips; "counterpartyHaircutPips": Pips; "effectiveAt": string; "evidenceHash": Hash; "reconciliationEvidenceHash": Hash; "reason": string; };

export type TreasuryStressRequest = { "launchPlanId": string; "unlockImpactId": string; "unlockImpactResourceVersion": Hash; "unlockImpactArtifactHash": Hash; "vaultId": string; "monthlyOperatingCostQuote": PositiveAtomicAmount; "reason": string; };

export type AllocationRequest = { "issuerIntentId": string; "totalCapitalQuote": PositiveAtomicAmount; "assetMappingId": string; "venueIds": Array<string>; "reason": string; };

export type MigrationRequest = { "sourceVenueId": string; "targetVenueId": string; "assetMappingId": string; "capitalQuote": PositiveAtomicAmount; "gasAndFeesQuote": AtomicAmount; "execution"?: { "vaultId": string; "scheduledPlanId": Hash; "legs": Array<{ "legId": "forward-withdraw-source" | "forward-deploy-target" | "rollback-withdraw-target" | "rollback-redeploy-source"; "scheduledLegIndex": number; "proof": Array<Hash>; "action": ControllerVenueActionV2; "economicBinding": MigrationLegEconomicBindingV2; }>; }; "reason": string; };

export type MigrationTransitionRequest = { "legId": string; "route": "FORWARD" | "ROLLBACK"; "toStatus": "SUBMITTED" | "FINALIZED_RECONCILED" | "FAILED_FINALIZED_RECONCILED" | "SKIPPED_RECONCILED"; "previousStateHash": Hash; "reason": string; };

export type PolicyExtractRequest = { "sourceText": string; "reason": string; };

export type StructuredPolicyRequest = { "clauses": Array<{ "field": "EXECUTABLE_DEPTH_QUOTE" | "PRICE_BAND_PIPS" | "MAXIMUM_TREASURY_DEPLOYMENT_PIPS" | "MAXIMUM_SLIPPAGE_PIPS" | "MINIMUM_PRICE_X18" | "MAXIMUM_DAILY_TURNOVER_PIPS" | "COOLDOWN_SECONDS"; "operator": "EQ" | "LTE" | "GTE"; "value": AtomicAmount; "unit": "QUOTE_ATOMIC" | "PIPS" | "PRICE_X18" | "SECONDS"; }>; "reason": string; };

export type PolicyCheckRequest = { "policy": AutonomyPolicy; "previousPolicy"?: AutonomyPolicy; "reason": string; };

export type ProviderRegistrationRequest = { "providerId": string; "capability": "AI_EXTRACTION" | "RPC" | "ORACLE" | "PRIVATE_RELAY" | "RFQ" | "SOLVER" | "OBJECT_STORAGE" | "WEBHOOK" | "MARKET_MAKER" | "INCENTIVE_ADAPTER" | "PARTNER" | "ISSUER_SIGNING" | "RESULTS_REGISTRY" | "STRATEGY_APPROVAL_REGISTRY" | "DOMAIN_VERIFICATION" | "EXECUTION_ATTRIBUTION"; "chainScope": Array<number>; "venueScope": Array<string>; "attestationHash": Hash; "timeoutMilliseconds": number; "maximumAgeSeconds": number; "healthState": "HEALTHY" | "DEGRADED" | "OPEN_CIRCUIT" | "DISABLED"; "consecutiveFailures": number; "circuitOpenUntil"?: string; "responsePublicKey": string; "reason": string; };

export type DeveloperCredentialRequest = { "label": string; "kind": "API_KEY" | "OAUTH_CLIENT"; "scopes": Array<"scores:read" | "studies:read" | "studies:write" | "strategies:validate" | "policies:compile" | "policies:check" | "proposals:read" | "proposals:prepare" | "vaults:read" | "receipts:read" | "proof:read" | "alerts:read" | "webhooks:manage">; "expiresAt"?: string; "reason": string; };

export type WebhookRequest = { "subscriptionId"?: string; "url": string; "eventTypes": Array<string>; "reason": string; };

export type StrategyPackageCandidate = { "packageId": string; "publisherOrganizationId": string; "name": string; "version": string; "compilerVersion": "strategy-dsl-v1"; "compilerHash": Hash; "definition": StrategyDefinitionV2Input; "supportedAssetIds": Array<string>; "supportedVenueIds": Array<string>; "riskClass": "LOW" | "MODERATE" | "HIGH" | "EXPERIMENTAL"; "performanceAssumptions": Array<string>; "historicalTests": Array<{ "studyId": string; "datasetHash": Hash; "reportHash": Hash; "compilerHash": Hash; "passedAt": string; "passed": true; }>; "forkTests": Array<{ "testRunId": string; "chainId": number; "forkBlockNumber": AtomicAmount; "forkBlockHash": Hash; "rpcQuorumEvidenceHashes": Array<Hash>; "artifactHash": Hash; "compilerHash": Hash; "passedAt": string; "passed": true; }>; "maximumCapitalQuote": AtomicAmount; "failureConditions": Array<string>; };

export type StrategyPackageApprovalRequest = { "independentReviews": Array<{ "reviewerIdentityId": string; "reviewerName": string; "reviewerOrganization": string; "reviewedPackageContentHash": Hash; "evidenceHash": Hash; "reviewedAt": string; "decision": "APPROVE"; }>; "approvalRegistryEvidence": { "approvalId": string; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "packageId": string; "packageVersion": string; "packageContentHash": Hash; "compilerHash": Hash; "reviewSetHash": Hash; "issuedAt": string; "validUntil": string; "signature": string; }; "reason": string; };

export type StrategyPackageSeedRequest = { "targetStrategyId": string; "reason": string; };

export type PartnerTenantCreate = { "partnerId": string; "name": string; "domainVerifications": Array<{ "domain": string; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "challengeHash": Hash; "observedAt": string; "validUntil": string; "signature": string; }>; "logoAsset"?: PartnerLogoAsset; "accentColor": string; "terminology": { [key: string]: string | undefined; }; "issuerOrganizationIds": Array<string>; "portfolioReaderActorIds": Array<string>; "proposalPreparerActorIds": Array<string>; "reportBrandName": string; "supportEmail"?: string; "contactName"?: string; "description"?: string; };

export type PartnerConsentOptions = { "partnerId": string; "partnerOrganizationId": string; "name": string; "partnerConfigurationResourceVersion": Hash; "partnerConfigurationArtifactHash": Hash; "portfolioReaderActorIds": Array<string>; "proposalPreparerActorIds": Array<string>; "status": "ACTIVE"; "currentConsentId": string | null; };

export type PartnerPreparationContext = { "partnerId": string; "issuerOrganizationId": string; "partnerConfigurationResourceVersion": Hash; "partnerConfigurationArtifactHash": Hash; "consentId": string; "consentResourceVersion": Hash; "consentArtifactHash": Hash; "consentExpiresAt": string | null; "proposalPreparationAllowed": true; "externalDeliveryAvailable": boolean; };

export type PartnerPreparationInboxEntry = { "eventId": string; "consentId": string; "partnerId": string; "partnerOrganizationId": string; "partnerActorId": string; "createdAt": string; "preparationHash": Hash; "proposal": ProposalWorkspace | null; "consentResourceVersion": Hash; "consentArtifactHash": Hash; "status": "PENDING" | "IMPORTED" | "DECLINED" | "UNAVAILABLE"; "unavailableReason": string | null; "importedProposalId": string | null; "executionAuthorityGranted": false; };

export type PartnerPreparationDecisionResult = { "decision": OperatingSystemEvent; "proposal": RecordEnvelope & { "payload": ProposalWorkspace; [key: string]: JsonValue | undefined; } | null; "issuerReviewRequired": boolean; "executionAuthorityGranted": false; };

export type PartnerPreparationStatus = { "preparationEventId": string; "deliveryJobId": string | null; "deliveryState": "NOT_REQUESTED" | "PENDING" | "LEASED" | "COMPLETED" | "FAILED" | "DEAD_LETTER" | "UNAVAILABLE"; "lastErrorCode": string | null; "issuerDecision": "PENDING" | "IMPORTED" | "DECLINED"; "executionAuthorityGranted": false; };

export type PartnerDomainDnsRecord = { "type": "TXT" | "CNAME"; "name": string; "value": string; };

export type PartnerCustomHostname = { "id": string; "hostnameStatus": string; "sslStatus": string; "validationRecords": Array<PartnerDomainDnsRecord>; };

export type PartnerDomainChallenge = { "id": string; "organizationId": string; "partnerId": string; "domain": string; "createdBy": string; "createdAt": string; "expiresAt": string; "version": number; "challengeHash": Hash; "dns": PartnerDomainDnsRecord; "state": "PENDING" | "VERIFIED" | "REVOKED"; "verification": { "domain": string; "providerId": string; "providerKeyResourceVersion": Hash; "providerAttestationHash": Hash; "challengeHash": Hash; "observedAt": string; "validUntil": string; "signature": string; } | null; "customHostname": PartnerCustomHostname | null; };

export type PartnerDomainStatus = { "challenge": PartnerDomainChallenge; "ownershipVerified": boolean; "customHostname": PartnerCustomHostname | null; "cnameTarget": string | null; "dnsPointsToTarget": boolean; "httpsReady": boolean; "checkedAt": string; "provisioning": "CLOUDFLARE_FOR_SAAS" | "OPERATOR_MANAGED"; };

export type PartnerDomainChallengeCreateRequest = { "partnerId": string; "domain": string; "reason": string; };

export type PartnerConsentGrantRequest = { "partnerId": string; "partnerOrganizationId": string; "partnerConfigurationResourceVersion": Hash; "partnerConfigurationArtifactHash": Hash; "portfolioReaderActorIds": Array<string>; "proposalPreparerActorIds": Array<string>; "expiresAt"?: string; "reason": string; };

export type MarketMakerEvidenceRequest = { "payload": MarketMakerEvidenceObservationInput; "reason": string; };

export type MarketQualityScoreActivationRequest = { "reason": string; };

export type TreasuryLedgerRefreshRequest = { "payload": TreasuryBucket; "reason": string; };

export type TreasuryLedgerRetirementRequest = { "retirementEvidenceHash": Hash; "reason": string; };

export type AgentControlCommand = { "action": "REVISE_ASSUMPTIONS"; "questionId": string; "proposalHash": string; "assumptions": { "seed"?: string; "stepCount"?: number; "startingPortfolioQuote"?: string; "startingDepthQuote"?: string; "startingInventoryPips"?: number; "objective"?: { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "baselineScenario"?: { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "alternatives"?: Array<{ "label": string; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; }>; }; } | { "action": "CONFIRM_RESEARCH"; "questionId": string; "confirmation": { "proposalHash": string; "expectedSourceResourceVersion": string; "acceptedAcknowledgements": Array<"MODELED_STEPS_NOT_CALENDAR_DAYS" | "CURRENT_DATA_NOT_HISTORICAL_REPLAY" | "CURRENT_IS_PLANNER_GENERATED_NOT_ACTUAL_HOLDINGS" | "UNLOCKS_AGGREGATED_AT_MIDPOINT" | "NO_POSITIVE_BUYER_PRICE_IMPACT" | "GAS_INCREASE_AT_MOST_TWO_TIMES" | "QUOTE_IDENTITY_AND_DECIMALS_UNVERIFIED" | "SCENARIOS_ARE_HYPOTHESES_NOT_FORECASTS" | "UNLOCK_MAGNITUDE_IS_WEIGHTED_PARTICIPATION_PROXY" | "HISTORICAL_RETURNS_ARE_FIXED_RETURN_MODEL_REPLAY" | "DRIVER_ATTRIBUTION_IS_APPROXIMATE" | "RESERVE_ORACLE_BREACH_IS_COMPOSITE_MODELED_EVENT">; "acceptProposedHypotheses": true; "limitationsAccepted": true; }; } | { "action": "CANCEL"; } | { "action": "RESPOND"; "questionId": string; "optionId": string; };

export type AgentControlReceipt = { "organizationId": string; "runId": string; "action": "CANCEL" | "RESPOND" | "REVISE_ASSUMPTIONS" | "CONFIRM_RESEARCH"; "state": "CANCELLED" | "QUEUED" | "COMPLETED"; "successorRunId"?: string | null; "resourceVersion": string; "acceptedAt": string; "replayed": boolean; };

export type ResearchPlanningState = { "schemaVersion": "research-planning-state-v1"; "organizationId": string; "runId": string; "runResourceVersion": string; "runState": "QUEUED" | "RUNNING" | "WAITING_FOR_INPUT" | "WAITING_FOR_CHILDREN" | "COMPLETED" | "PARTIAL" | "ABSTAINED" | "FAILED" | "CANCELLED"; "checkedAt": string; "subject": { "issuerIntentId": string; "expectedResourceVersion": string; }; "currentSourceResourceVersion": string | null; "proposal": { "schemaVersion": "research-planning-proposal-v1"; "organizationId": string; "runId": string; "contextHash": string; "sourceHash": string; "sourceCutoff": string; "subject": { "issuerIntentId": string; "expectedResourceVersion": string; }; "question": string; "status": "NEEDS_INPUT" | "NEEDS_REVIEW"; "candidate": { "seed"?: string; "stepCount"?: number; "startingPortfolioQuote"?: string; "startingDepthQuote"?: string; "startingInventoryPips"?: number; "objective"?: { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "baselineScenario"?: { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "alternatives": Array<{ "label": string; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; }>; "schemaVersion": "research-experiment-v1"; "pathCount": 2000; "interpretation": "CURRENT_DATA_HYPOTHETICAL_MODELED_STEPS"; }; "missingInputs": Array<"objective" | "baselineScenario" | "seed" | "stepCount" | "startingPortfolioQuote" | "startingDepthQuote" | "startingInventoryPips">; "validationIssues": Array<{ "path": string; "message": string; }>; "unsupportedRequests": Array<"CALENDAR_TIME" | "HISTORICAL_AS_OF" | "ACTUAL_HOLDINGS_BASELINE" | "EXACT_UNLOCK_TIMING" | "POSITIVE_BUYER_IMPACT" | "GAS_ABOVE_TWO_TIMES" | "UNLOCK_MARKET_DEPTH_IMPACT" | "FILL_ACCURATE_BACKTEST" | "OTHER_UNSUPPORTED">; "provenance": Array<{ "field": "objective" | "baselineScenario" | "seed" | "stepCount" | "startingPortfolioQuote" | "startingDepthQuote" | "startingInventoryPips" | "alternatives"; "basis": "USER_SUPPLIED_ASSUMPTION" | "MODEL_PROPOSED_HYPOTHESIS" | "MISSING"; }>; "requiredAcknowledgements": Array<"MODELED_STEPS_NOT_CALENDAR_DAYS" | "CURRENT_DATA_NOT_HISTORICAL_REPLAY" | "CURRENT_IS_PLANNER_GENERATED_NOT_ACTUAL_HOLDINGS" | "UNLOCKS_AGGREGATED_AT_MIDPOINT" | "NO_POSITIVE_BUYER_PRICE_IMPACT" | "GAS_INCREASE_AT_MOST_TWO_TIMES" | "QUOTE_IDENTITY_AND_DECIMALS_UNVERIFIED" | "SCENARIOS_ARE_HYPOTHESES_NOT_FORECASTS" | "UNLOCK_MAGNITUDE_IS_WEIGHTED_PARTICIPATION_PROXY" | "HISTORICAL_RETURNS_ARE_FIXED_RETURN_MODEL_REPLAY" | "DRIVER_ATTRIBUTION_IS_APPROXIMATE" | "RESERVE_ORACLE_BREACH_IS_COMPOSITE_MODELED_EVENT">; "financialAuthority": false; "publicationAuthority": false; "executionAuthorized": false; "proposalHash": string; } | null; "questionId": string | null; "successorRunId": string | null; };

export type ResearchPlanningAssumptions = { "seed"?: string; "stepCount"?: number; "startingPortfolioQuote"?: string; "startingDepthQuote"?: string; "startingInventoryPips"?: number; "objective"?: { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "baselineScenario"?: { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "alternatives"?: Array<{ "label": string; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; }>; };

export type ResearchPlanningAdmissionRequest = { "kind": "WHAT_IF_RESEARCH"; "mode": "PLAN"; "question": string; "subject": { "issuerIntentId": string; "expectedResourceVersion": string; }; "assumptions": { "seed"?: string; "stepCount"?: number; "startingPortfolioQuote"?: string; "startingDepthQuote"?: string; "startingInventoryPips"?: number; "objective"?: { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "baselineScenario"?: { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "alternatives"?: Array<{ "label": string; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; }>; }; };

export type ResearchPlanningProposal = { "schemaVersion": "research-planning-proposal-v1"; "organizationId": string; "runId": string; "contextHash": string; "sourceHash": string; "sourceCutoff": string; "subject": { "issuerIntentId": string; "expectedResourceVersion": string; }; "question": string; "status": "NEEDS_INPUT" | "NEEDS_REVIEW"; "candidate": { "seed"?: string; "stepCount"?: number; "startingPortfolioQuote"?: string; "startingDepthQuote"?: string; "startingInventoryPips"?: number; "objective"?: { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "baselineScenario"?: { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "alternatives": Array<{ "label": string; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; }>; "schemaVersion": "research-experiment-v1"; "pathCount": 2000; "interpretation": "CURRENT_DATA_HYPOTHETICAL_MODELED_STEPS"; }; "missingInputs": Array<"objective" | "baselineScenario" | "seed" | "stepCount" | "startingPortfolioQuote" | "startingDepthQuote" | "startingInventoryPips">; "validationIssues": Array<{ "path": string; "message": string; }>; "unsupportedRequests": Array<"CALENDAR_TIME" | "HISTORICAL_AS_OF" | "ACTUAL_HOLDINGS_BASELINE" | "EXACT_UNLOCK_TIMING" | "POSITIVE_BUYER_IMPACT" | "GAS_ABOVE_TWO_TIMES" | "UNLOCK_MARKET_DEPTH_IMPACT" | "FILL_ACCURATE_BACKTEST" | "OTHER_UNSUPPORTED">; "provenance": Array<{ "field": "objective" | "baselineScenario" | "seed" | "stepCount" | "startingPortfolioQuote" | "startingDepthQuote" | "startingInventoryPips" | "alternatives"; "basis": "USER_SUPPLIED_ASSUMPTION" | "MODEL_PROPOSED_HYPOTHESIS" | "MISSING"; }>; "requiredAcknowledgements": Array<"MODELED_STEPS_NOT_CALENDAR_DAYS" | "CURRENT_DATA_NOT_HISTORICAL_REPLAY" | "CURRENT_IS_PLANNER_GENERATED_NOT_ACTUAL_HOLDINGS" | "UNLOCKS_AGGREGATED_AT_MIDPOINT" | "NO_POSITIVE_BUYER_PRICE_IMPACT" | "GAS_INCREASE_AT_MOST_TWO_TIMES" | "QUOTE_IDENTITY_AND_DECIMALS_UNVERIFIED" | "SCENARIOS_ARE_HYPOTHESES_NOT_FORECASTS" | "UNLOCK_MAGNITUDE_IS_WEIGHTED_PARTICIPATION_PROXY" | "HISTORICAL_RETURNS_ARE_FIXED_RETURN_MODEL_REPLAY" | "DRIVER_ATTRIBUTION_IS_APPROXIMATE" | "RESERVE_ORACLE_BREACH_IS_COMPOSITE_MODELED_EVENT">; "financialAuthority": false; "publicationAuthority": false; "executionAuthorized": false; "proposalHash": string; };

export type ResearchPlanningConfirmation = { "proposalHash": string; "expectedSourceResourceVersion": string; "acceptedAcknowledgements": Array<"MODELED_STEPS_NOT_CALENDAR_DAYS" | "CURRENT_DATA_NOT_HISTORICAL_REPLAY" | "CURRENT_IS_PLANNER_GENERATED_NOT_ACTUAL_HOLDINGS" | "UNLOCKS_AGGREGATED_AT_MIDPOINT" | "NO_POSITIVE_BUYER_PRICE_IMPACT" | "GAS_INCREASE_AT_MOST_TWO_TIMES" | "QUOTE_IDENTITY_AND_DECIMALS_UNVERIFIED" | "SCENARIOS_ARE_HYPOTHESES_NOT_FORECASTS" | "UNLOCK_MAGNITUDE_IS_WEIGHTED_PARTICIPATION_PROXY" | "HISTORICAL_RETURNS_ARE_FIXED_RETURN_MODEL_REPLAY" | "DRIVER_ATTRIBUTION_IS_APPROXIMATE" | "RESERVE_ORACLE_BREACH_IS_COMPOSITE_MODELED_EVENT">; "acceptProposedHypotheses": true; "limitationsAccepted": true; };

export type ResearchComparison = { "schemaVersion": "research-comparison-v1"; "baselineTrialId": string; "objective": { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "context": { "organizationId": string; "issuerIntentId": string; "issuerIntentResourceVersion": string; "issuerIntentArtifactHash": string; "sourceCutoff": string; "quoteSymbol": string; "quoteAssetId": string | null; "quoteDecimals": number | null; "seedPolicyVersion": string; "horizonUnit": "MODELED_STEPS" | "CALIBRATED_STEPS"; "stepDurationSeconds": number | null; "analysisBasis": "CURRENT_DATA_HYPOTHETICAL" | "HISTORICAL_POINT_IN_TIME"; "historicalAvailabilityEvidenceHash": string | null; } | null; "status": "BASELINE_UNAVAILABLE" | "COMPLETE" | "PARTIAL"; "eligibilityRule": "ADMITTED_INTENT_CONSTRAINTS_AND_RESERVE_BREACH_AT_MOST_100000_PIPS"; "rankingScope": "WITHIN_SCENARIO_VARIANTS"; "limitations": Array<"CURRENT_IS_ENGINE_GENERATED_NOT_ACTUAL_HOLDINGS" | "COMPARISON_DOES_NOT_PROVE_EQUAL_CAPITAL_SUPERIORITY" | "MARGINAL_PERCENTILE_DIFFERENCES_ARE_NOT_PAIRED_DIFFERENCE_PERCENTILES" | "RESERVE_BREACH_IS_COMPOSITE_RESERVE_OR_ORACLE_BLOCKED_EVENT" | "MODEL_OUTCOMES_ARE_NOT_FINANCIAL_GUARANTEES" | "ARTIFACT_HASHES_DO_NOT_REPRODUCE_ENGINE_OUTPUT">; "trials": Array<{ "trialId": string; "label": string; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "failureCode": string | null; "admittedInputHash": string | null; "resultArtifactHash": string | null; "context": { "organizationId": string; "issuerIntentId": string; "issuerIntentResourceVersion": string; "issuerIntentArtifactHash": string; "sourceCutoff": string; "quoteSymbol": string; "quoteAssetId": string | null; "quoteDecimals": number | null; "seedPolicyVersion": string; "horizonUnit": "MODELED_STEPS" | "CALIBRATED_STEPS"; "stepDurationSeconds": number | null; "analysisBasis": "CURRENT_DATA_HYPOTHETICAL" | "HISTORICAL_POINT_IN_TIME"; "historicalAvailabilityEvidenceHash": string | null; } | null; "admittedInput": { "schemaVersion": "simulation-study-input-snapshot-v1"; "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "targetTradeSizeQuote": string; "startingPortfolioQuote": string; "startingDepthQuote": string; "startingInventoryPips": number; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "variants": Array<{ "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }>; } | null; "status": "PENDING" | "FAILED" | "CANCELLED" | "INVALID" | "INCOMPATIBLE" | "BASELINE_UNAVAILABLE" | "COMPARABLE"; "reasons": Array<string>; "warnings": Array<string>; "variants": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "capitalPlan": { "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }; "outcomes": { "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "endingValueQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "turnoverQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "gasCostQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "feeIncomeQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "protocolFeesQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "platformFeesQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "minimumDepthQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "slippagePips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "drawdownPips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "inventoryPips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "reserveBreachProbabilityPips": number; "drivers": Array<{ "driver": "PRICE_PATH" | "VOLATILITY" | "FLOW" | "LIQUIDITY" | "UNLOCK" | "GAS" | "RESERVE"; "impactQuote": string; "evidence": string; "method": "DETERMINISTIC_COUNTERFACTUAL_DELTA_V1"; }>; }; "eligible": boolean; "ineligibilityReasons": Array<string>; "differences": Array<{ "metric": "endingValueQuote" | "turnoverQuote" | "gasCostQuote" | "feeIncomeQuote" | "protocolFeesQuote" | "platformFeesQuote" | "minimumDepthQuote" | "slippagePips" | "drawdownPips" | "inventoryPips" | "reserveBreachProbabilityPips"; "percentile": "p5" | "p25" | "p50" | "p75" | "p95" | null; "unit": "VERIFIED_QUOTE_ASSET_ATOMIC" | "ISSUER_INTENT_QUOTE_ATOMIC" | "PIPS_POINT_DIFFERENCE"; "baseline": string; "scenario": string; "delta": string; "interpretation": "DIFFERENCE_OF_MARGINAL_PERCENTILES" | "DIFFERENCE_OF_PROBABILITIES"; }>; }>; "ranking": { "status": "BLOCKED" | "NO_ELIGIBLE_RECOMMENDATION" | "RANKED"; "reason": string | null; "entries": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "rank": number; "objectiveValue": string; }>; }; }>; };

export type ResearchReport = { "schemaVersion": "agent-research-report-v1"; "organizationId": string; "runId": string; "protocolHash": string; "sourceCutoff": string; "status": "ABSTAINED" | "PARTIAL" | "COMPLETED"; "comparison": { "schemaVersion": "research-comparison-v1"; "baselineTrialId": string; "objective": { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "context": { "organizationId": string; "issuerIntentId": string; "issuerIntentResourceVersion": string; "issuerIntentArtifactHash": string; "sourceCutoff": string; "quoteSymbol": string; "quoteAssetId": string | null; "quoteDecimals": number | null; "seedPolicyVersion": string; "horizonUnit": "MODELED_STEPS" | "CALIBRATED_STEPS"; "stepDurationSeconds": number | null; "analysisBasis": "CURRENT_DATA_HYPOTHETICAL" | "HISTORICAL_POINT_IN_TIME"; "historicalAvailabilityEvidenceHash": string | null; } | null; "status": "BASELINE_UNAVAILABLE" | "COMPLETE" | "PARTIAL"; "eligibilityRule": "ADMITTED_INTENT_CONSTRAINTS_AND_RESERVE_BREACH_AT_MOST_100000_PIPS"; "rankingScope": "WITHIN_SCENARIO_VARIANTS"; "limitations": Array<"CURRENT_IS_ENGINE_GENERATED_NOT_ACTUAL_HOLDINGS" | "COMPARISON_DOES_NOT_PROVE_EQUAL_CAPITAL_SUPERIORITY" | "MARGINAL_PERCENTILE_DIFFERENCES_ARE_NOT_PAIRED_DIFFERENCE_PERCENTILES" | "RESERVE_BREACH_IS_COMPOSITE_RESERVE_OR_ORACLE_BLOCKED_EVENT" | "MODEL_OUTCOMES_ARE_NOT_FINANCIAL_GUARANTEES" | "ARTIFACT_HASHES_DO_NOT_REPRODUCE_ENGINE_OUTPUT">; "trials": Array<{ "trialId": string; "label": string; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "failureCode": string | null; "admittedInputHash": string | null; "resultArtifactHash": string | null; "context": { "organizationId": string; "issuerIntentId": string; "issuerIntentResourceVersion": string; "issuerIntentArtifactHash": string; "sourceCutoff": string; "quoteSymbol": string; "quoteAssetId": string | null; "quoteDecimals": number | null; "seedPolicyVersion": string; "horizonUnit": "MODELED_STEPS" | "CALIBRATED_STEPS"; "stepDurationSeconds": number | null; "analysisBasis": "CURRENT_DATA_HYPOTHETICAL" | "HISTORICAL_POINT_IN_TIME"; "historicalAvailabilityEvidenceHash": string | null; } | null; "admittedInput": { "schemaVersion": "simulation-study-input-snapshot-v1"; "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "targetTradeSizeQuote": string; "startingPortfolioQuote": string; "startingDepthQuote": string; "startingInventoryPips": number; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "variants": Array<{ "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }>; } | null; "status": "PENDING" | "FAILED" | "CANCELLED" | "INVALID" | "INCOMPATIBLE" | "BASELINE_UNAVAILABLE" | "COMPARABLE"; "reasons": Array<string>; "warnings": Array<string>; "variants": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "capitalPlan": { "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }; "outcomes": { "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "endingValueQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "turnoverQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "gasCostQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "feeIncomeQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "protocolFeesQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "platformFeesQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "minimumDepthQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "slippagePips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "drawdownPips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "inventoryPips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "reserveBreachProbabilityPips": number; "drivers": Array<{ "driver": "PRICE_PATH" | "VOLATILITY" | "FLOW" | "LIQUIDITY" | "UNLOCK" | "GAS" | "RESERVE"; "impactQuote": string; "evidence": string; "method": "DETERMINISTIC_COUNTERFACTUAL_DELTA_V1"; }>; }; "eligible": boolean; "ineligibilityReasons": Array<string>; "differences": Array<{ "metric": "endingValueQuote" | "turnoverQuote" | "gasCostQuote" | "feeIncomeQuote" | "protocolFeesQuote" | "platformFeesQuote" | "minimumDepthQuote" | "slippagePips" | "drawdownPips" | "inventoryPips" | "reserveBreachProbabilityPips"; "percentile": "p5" | "p25" | "p50" | "p75" | "p95" | null; "unit": "VERIFIED_QUOTE_ASSET_ATOMIC" | "ISSUER_INTENT_QUOTE_ATOMIC" | "PIPS_POINT_DIFFERENCE"; "baseline": string; "scenario": string; "delta": string; "interpretation": "DIFFERENCE_OF_MARGINAL_PERCENTILES" | "DIFFERENCE_OF_PROBABILITIES"; }>; }>; "ranking": { "status": "BLOCKED" | "NO_ELIGIBLE_RECOMMENDATION" | "RANKED"; "reason": string | null; "entries": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "rank": number; "objectiveValue": string; }>; }; }>; }; "findings": Array<{ "id": string; "kind": "SCOPE" | "ANALYSIS_BASIS" | "DISPOSITION" | "TRIAL" | "ELIGIBILITY" | "ADVERSE_OUTCOME" | "LIMITATION" | "METRIC_EXPLANATION"; "mandatory": boolean; "severity": "INFO" | "WARNING"; "summary": string; "trialId": string | null; }>; "nextChecks": Array<"INSPECT_STUDY_INPUTS" | "INSPECT_FAILED_TRIALS" | "REVIEW_MODEL_LIMITATIONS" | "EDIT_AND_RERUN" | "RETURN_TO_PLAN">; "financialAuthority": false; "publicationAuthority": false; };

export type SavedResearchResult = { "schemaVersion": "saved-research-result-v1"; "organizationId": string; "runId": string; "resultVersion": string; "completedAt": string; "protocolHash": string; "report": { "schemaVersion": "agent-research-report-v1"; "organizationId": string; "runId": string; "protocolHash": string; "sourceCutoff": string; "status": "ABSTAINED" | "PARTIAL" | "COMPLETED"; "comparison": { "schemaVersion": "research-comparison-v1"; "baselineTrialId": string; "objective": { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "context": { "organizationId": string; "issuerIntentId": string; "issuerIntentResourceVersion": string; "issuerIntentArtifactHash": string; "sourceCutoff": string; "quoteSymbol": string; "quoteAssetId": string | null; "quoteDecimals": number | null; "seedPolicyVersion": string; "horizonUnit": "MODELED_STEPS" | "CALIBRATED_STEPS"; "stepDurationSeconds": number | null; "analysisBasis": "CURRENT_DATA_HYPOTHETICAL" | "HISTORICAL_POINT_IN_TIME"; "historicalAvailabilityEvidenceHash": string | null; } | null; "status": "BASELINE_UNAVAILABLE" | "COMPLETE" | "PARTIAL"; "eligibilityRule": "ADMITTED_INTENT_CONSTRAINTS_AND_RESERVE_BREACH_AT_MOST_100000_PIPS"; "rankingScope": "WITHIN_SCENARIO_VARIANTS"; "limitations": Array<"CURRENT_IS_ENGINE_GENERATED_NOT_ACTUAL_HOLDINGS" | "COMPARISON_DOES_NOT_PROVE_EQUAL_CAPITAL_SUPERIORITY" | "MARGINAL_PERCENTILE_DIFFERENCES_ARE_NOT_PAIRED_DIFFERENCE_PERCENTILES" | "RESERVE_BREACH_IS_COMPOSITE_RESERVE_OR_ORACLE_BLOCKED_EVENT" | "MODEL_OUTCOMES_ARE_NOT_FINANCIAL_GUARANTEES" | "ARTIFACT_HASHES_DO_NOT_REPRODUCE_ENGINE_OUTPUT">; "trials": Array<{ "trialId": string; "label": string; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "failureCode": string | null; "admittedInputHash": string | null; "resultArtifactHash": string | null; "context": { "organizationId": string; "issuerIntentId": string; "issuerIntentResourceVersion": string; "issuerIntentArtifactHash": string; "sourceCutoff": string; "quoteSymbol": string; "quoteAssetId": string | null; "quoteDecimals": number | null; "seedPolicyVersion": string; "horizonUnit": "MODELED_STEPS" | "CALIBRATED_STEPS"; "stepDurationSeconds": number | null; "analysisBasis": "CURRENT_DATA_HYPOTHETICAL" | "HISTORICAL_POINT_IN_TIME"; "historicalAvailabilityEvidenceHash": string | null; } | null; "admittedInput": { "schemaVersion": "simulation-study-input-snapshot-v1"; "engineVersion": "digital-twin-pcg64-fixed-v2"; "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "targetTradeSizeQuote": string; "startingPortfolioQuote": string; "startingDepthQuote": string; "startingInventoryPips": number; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "variants": Array<{ "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }>; } | null; "status": "PENDING" | "FAILED" | "CANCELLED" | "INVALID" | "INCOMPATIBLE" | "BASELINE_UNAVAILABLE" | "COMPARABLE"; "reasons": Array<string>; "warnings": Array<string>; "variants": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "capitalPlan": { "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }; "outcomes": { "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "endingValueQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "turnoverQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "gasCostQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "feeIncomeQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "protocolFeesQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "platformFeesQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "minimumDepthQuote": { "p5": string; "p25": string; "p50": string; "p75": string; "p95": string; }; "slippagePips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "drawdownPips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "inventoryPips": { "p5": number; "p25": number; "p50": number; "p75": number; "p95": number; }; "reserveBreachProbabilityPips": number; "drivers": Array<{ "driver": "PRICE_PATH" | "VOLATILITY" | "FLOW" | "LIQUIDITY" | "UNLOCK" | "GAS" | "RESERVE"; "impactQuote": string; "evidence": string; "method": "DETERMINISTIC_COUNTERFACTUAL_DELTA_V1"; }>; }; "eligible": boolean; "ineligibilityReasons": Array<string>; "differences": Array<{ "metric": "endingValueQuote" | "turnoverQuote" | "gasCostQuote" | "feeIncomeQuote" | "protocolFeesQuote" | "platformFeesQuote" | "minimumDepthQuote" | "slippagePips" | "drawdownPips" | "inventoryPips" | "reserveBreachProbabilityPips"; "percentile": "p5" | "p25" | "p50" | "p75" | "p95" | null; "unit": "VERIFIED_QUOTE_ASSET_ATOMIC" | "ISSUER_INTENT_QUOTE_ATOMIC" | "PIPS_POINT_DIFFERENCE"; "baseline": string; "scenario": string; "delta": string; "interpretation": "DIFFERENCE_OF_MARGINAL_PERCENTILES" | "DIFFERENCE_OF_PROBABILITIES"; }>; }>; "ranking": { "status": "BLOCKED" | "NO_ELIGIBLE_RECOMMENDATION" | "RANKED"; "reason": string | null; "entries": Array<{ "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "rank": number; "objectiveValue": string; }>; }; }>; }; "findings": Array<{ "id": string; "kind": "SCOPE" | "ANALYSIS_BASIS" | "DISPOSITION" | "TRIAL" | "ELIGIBILITY" | "ADVERSE_OUTCOME" | "LIMITATION" | "METRIC_EXPLANATION"; "mandatory": boolean; "severity": "INFO" | "WARNING"; "summary": string; "trialId": string | null; }>; "nextChecks": Array<"INSPECT_STUDY_INPUTS" | "INSPECT_FAILED_TRIALS" | "REVIEW_MODEL_LIMITATIONS" | "EDIT_AND_RERUN" | "RETURN_TO_PLAN">; "financialAuthority": false; "publicationAuthority": false; }; "applicability": { "scope": "ISSUER_INTENT_VERSION_ONLY"; "status": "SAME_SUBJECT_VERSION" | "SUBJECT_CHANGED" | "SUBJECT_UNAVAILABLE"; "checkedAt": string; "savedSubjectVersion": string; "currentSubjectVersion": string | null; }; };

export type ResearchTrialInput = { "schemaVersion": "agent-research-trial-input-v1"; "organizationId": string; "runId": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "label": string; "protocolHash": string; "inputHash": string; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "chargedComputeUnits": string; "failureCode": string | null; "artifactHash": string | null; "recordedAt": string | null; "input": { "seed": string; "pathCount": 2000 | 10000; "stepCount": number; "targetTradeSizeQuote": string; "startingPortfolioQuote": string; "startingDepthQuote": string; "startingInventoryPips": number; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "variants": Array<{ "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }>; }; "financialAuthority": false; "publicationAuthority": false; };

export type ResearchAdmissionRequest = { "kind": "WHAT_IF_RESEARCH"; "question": string; "subject": { "issuerIntentId": string; "expectedResourceVersion": string; }; "experiment": { "schemaVersion": "research-experiment-v1"; "objective": { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "seed": string; "pathCount": 2000; "stepCount": number; "startingPortfolioQuote": string; "startingDepthQuote": string; "startingInventoryPips": number; "baselineScenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; "alternatives": Array<{ "label": string; "scenario": { "id": string; "name": string; "kind": "HISTORICAL_REPLAY" | "BULL" | "BEAR" | "SIDEWAYS" | "LIQUIDITY_CRISIS" | "TOKEN_UNLOCK" | "LARGE_BUYER" | "LARGE_SELLER" | "LIQUIDITY_WITHDRAWAL" | "GAS_SPIKE" | "ORACLE_OUTAGE" | "COMBINED"; "driftPipsPerStep": number; "volatilityPipsPerStep": number; "liquidityWithdrawalPips": number; "oneSidedFlowPips": number; "gasIncreasePips": number; "oracleOutageStep"?: number; "historicalReturnPips"?: Array<number>; "protocolFeePips"?: number; "platformFeePips"?: number; "unlocks": Array<{ "id": string; "unlocksAt": string; "tokenAmount": string; "recipientCategory": "TEAM" | "INVESTOR" | "COMMUNITY" | "TREASURY" | "ECOSYSTEM" | "OTHER"; "expectedSaleParticipationPips": number; "confidencePips": number; "correlationGroup"?: string; "evidenceHash"?: string; }>; }; }>; "interpretation": "CURRENT_DATA_HYPOTHETICAL_MODELED_STEPS"; "limitationsAccepted": true; }; };

export type ResearchProgress = { "schemaVersion": "agent-research-progress-v1"; "organizationId": string; "runId": string; "runResourceVersion": string; "runState": "QUEUED" | "RUNNING" | "WAITING_FOR_INPUT" | "WAITING_FOR_CHILDREN" | "COMPLETED" | "PARTIAL" | "ABSTAINED" | "FAILED" | "CANCELLED"; "checkedAt": string; "sourceCutoff": string; "protocolHash": string | null; "studyCount": number | null; "trials": Array<{ "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "label": string; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "chargedComputeUnits": string; "failureCode": string | null; "artifactHash": string | null; "recordedAt": string | null; "inputHash": string; }>; "financialAuthority": false; "publicationAuthority": false; };

export type HealthAgentAdmissionRequest = { "kind": "HEALTH_INVESTIGATION"; "question": string; "subject": { "vaultId": string; "expectedVaultUpdatedAt": string; "window": { "start": string; "end": string; }; "baselineWindow": { "start": string; "end": string; }; } | { "type": "SAVED_PUBLIC_PROJECT"; "projectId": string; "expectedResourceVersion": string; "observationSequence": string; "baselineSequence": string | null; }; };

export type ProposalReviewAdmissionRequest = { "kind": "PROPOSAL_REVIEW"; "question": string; "subject": { "generation": "V1"; "proposalId": string; "expectedUpdatedAt": string; } | { "generation": "V2"; "proposalId": string; "expectedResourceVersion": string; } | { "generation": "DECISION_PACK"; "packId": string; "expectedResourceVersion": string; "expectedContentHash": string; }; };

export type AgentAdmissionRequest = HealthAgentAdmissionRequest | ProposalReviewAdmissionRequest | ResearchAdmissionRequest | ResearchPlanningAdmissionRequest;

export type AgentAdmissionReceipt = { "schemaVersion": "agent-admission-receipt-v1"; "organizationId": string; "runId": string; "kind": "HEALTH_INVESTIGATION" | "PROPOSAL_REVIEW" | "WHAT_IF_RESEARCH"; "state": "QUEUED" | "RUNNING" | "WAITING_FOR_INPUT" | "WAITING_FOR_CHILDREN" | "COMPLETED" | "PARTIAL" | "ABSTAINED" | "FAILED" | "CANCELLED"; "phase": "ADMITTED" | "CAPTURING_EVIDENCE" | "CHECKING_SOURCES" | "COMPARING_EVIDENCE" | "PLANNING" | "READING_EVIDENCE" | "WAITING_FOR_INPUT" | "WAITING_FOR_STUDIES" | "VALIDATING_REPORT" | "FINISHED"; "resourceVersion": string; "createdAt": string; "deadline": string; "replayed": boolean; };

export type HealthEvidenceSource = { "generation": "V1"; "recordType": string; "recordId": string; "updatedAt": string; "copiedPayloadHash": string; } | { "generation": "V2"; "recordType": string; "recordId": string; "resourceVersion": string; "artifactHash": string; };

export type HealthFieldReceipt = { "evidenceId": string; "source": HealthEvidenceSource; "temporalScope": "HISTORICAL" | "CURRENT_CONTEXT"; "observedAt": string | null; "availableAt": string | null; "capturedAt": string; "sourceCutoff": string; "quoteAssetId": string | null; "finality": "FINALIZED" | "NOT_APPLICABLE" | "UNKNOWN"; "field": string; "value": string | number | boolean; };

export type HealthMetricReading = { "evidenceId": string; "field": string; "value": string; "observedAt": string; "quoteAssetId": string; "quoteDecimals": number; "definition": string; };

export type HealthMetricComparison = { "metric": "QUOTE_BALANCE" | "PROTECTED_QUOTE_RESERVE" | "BUY_DEPTH" | "SELL_DEPTH"; "aggregation": "LAST_RECORDED_SAMPLE"; "unit": "QUOTE_ATOMIC"; "baseline": HealthMetricReading | null; "observation": HealthMetricReading | null; "status": "COMPARABLE" | "BASELINE_UNAVAILABLE" | "OBSERVATION_UNAVAILABLE" | "BOTH_UNAVAILABLE" | "INCOMPATIBLE_UNITS" | "INCOMPATIBLE_DEFINITION"; "absoluteDelta": string | null; "relativeChange": { "numerator": string; "denominator": string; } | null; "relativeUnavailableReason": "ZERO_BASELINE" | "NOT_COMPARABLE" | null; };

export type HealthMarketQualityCheck = { "evidenceId": string; "period": "CONTEXT" | "BASELINE" | "OBSERVATION"; "algorithm": "market-quality-score-v2"; "arithmetic": "REPRODUCED" | "MISMATCH" | "UNAVAILABLE"; "sourceBindings": "MATCHED" | "MISMATCH" | "INCOMPLETE"; "rawMetrics": "REPRODUCED" | "MISMATCH" | "UNAVAILABLE"; "sourceEvidenceIds": Array<string>; "issues": Array<string>; "reproduced": { "availability": "AVAILABLE" | "UNAVAILABLE"; "score": number | null; "coveragePips": number; "components": Array<{ "component": string; "weightPips": number; "score": number | null; }>; } | null; "verificationScope": "DERIVED_SCORE_FIELDS_AND_CAPTURED_INPUTS"; "signaturesAndQualification": "NOT_REVERIFIED"; "fullInputHash": "MATCHED" | "MISMATCH" | "NOT_RECOMPUTED"; };

export type HealthClaim = { "claimId": string; "kind": "RECORDED_FIELD" | "CHECKED_COMPARISON" | "CHECKED_MARKET_QUALITY"; "label": string; "verification": "RECORDED_SOURCE_ONLY" | "EXACT_ARITHMETIC" | "REPRODUCED_FROM_CAPTURED_INPUTS"; "receipts": Array<HealthFieldReceipt>; "comparison"?: HealthMetricComparison; "marketQuality"?: HealthMarketQualityCheck; };

export type HealthCoverageGroup = { "sourceType": "VAULT" | "POLICY" | "FINALIZED_SNAPSHOT" | "MARKET_QUALITY_SCORE" | "VENUE_OBSERVATION" | "EXECUTION_ATTRIBUTION" | "ANOMALY" | "INCIDENT" | "PROPOSAL"; "period": "CONTEXT" | "BASELINE" | "OBSERVATION"; "candidateCount": number; "includedCount": number; };

export type ValidatedHealthReport = { "schemaVersion": "agent-health-report-v1"; "organizationId": string; "runId": string; "captureHash": string; "sourceCutoff": string; "capturedAt": string; "window": { "start": string; "end": string; }; "baselineWindow": { "start": string; "end": string; }; "status": "PARTIAL" | "ABSTAINED"; "marketHealth": "NOT_ASSESSED"; "title": string; "findings": Array<HealthClaim>; "comparisons": Array<HealthMetricComparison>; "marketQuality": Array<HealthMarketQualityCheck>; "hypotheses": Array<{ "hypothesisId": string; "rank": number; "label": "UNVERIFIED_HYPOTHESIS"; "explanation": string; "supportingClaims": Array<HealthClaim>; "contradictingClaims": Array<HealthClaim>; "uncertainty": string; "warning": string; }>; "coverage": Array<HealthCoverageGroup>; "gaps": Array<string>; "nextChecks": Array<{ "kind": "REVIEW_POLICY" | "REVIEW_ACTIVITY" | "REVIEW_INCIDENTS" | "CHECK_DATA_HEALTH" | "EXPLORE_RESEARCH_DRAFT"; "label": string; "destination": "POLICY" | "ACTIVITY" | "INCIDENTS" | "DATA_HEALTH" | "RESEARCH_SETUP"; "execution": "MANUAL_NAVIGATION_ONLY"; }>; "validation": { "version": "health-report-validator-v1"; "checkedClaimCount": number; "recordedClaimCount": number; "availableClaimCount": number; "hypothesisSemanticsVerified": false; }; };

export type SavedHealthResult = { "schemaVersion": "agent-health-result-v1"; "organizationId": string; "runId": string; "reportId": string; "resultVersion": string; "completedAt": string; "report": ValidatedHealthReport; "provenance": { "workflowVersion": string; "validatorVersion": "health-report-validator-v1"; "provider": string; "model": string; "modelVersion": string; }; "applicability": { "status": "SAME_SUBJECT_VERSION" | "SUBJECT_CHANGED" | "CURRENT_STATUS_UNAVAILABLE"; "checkedAt": string; "savedSubjectVersion": string; "currentSubjectVersion": string | null; "scope": "VAULT_RECORD_VERSION_ONLY"; }; };

export type CapturedHealthEvidenceView = { "schemaVersion": "agent-health-evidence-view-v1"; "organizationId": string; "runId": string; "captureHash": string; "evidence": { "evidenceId": string; "source": HealthEvidenceSource; "temporalScope": "HISTORICAL" | "CURRENT_CONTEXT"; "observedAt": string | null; "availableAt": string | null; "capturedAt": string; "sourceCutoff": string; "quoteAssetId": string | null; "finality": "FINALIZED" | "NOT_APPLICABLE" | "UNKNOWN"; "unit": string | null; "coverage": { "includedRecords": number; "excludedRecords": number; "truncated": boolean; "gaps": Array<string>; }; "sourceType": "VAULT" | "POLICY" | "FINALIZED_SNAPSHOT" | "MARKET_QUALITY_SCORE" | "VENUE_OBSERVATION" | "EXECUTION_ATTRIBUTION" | "ANOMALY" | "INCIDENT" | "PROPOSAL"; "period": "CONTEXT" | "BASELINE" | "OBSERVATION"; "fields": Array<{ "field": string; "value": string | number | boolean | null; }>; "verification": "RECORDED_SOURCE_ASSERTIONS"; }; };

export type ProjectHealthFinding = { "id": string; "summary": string; "evidenceSequences": Array<string>; "measurement": { "asset": string; "decimals": number | null; "baselineAtomic": string; "observationAtomic": string; "changeAtomic": string; } | null; };

export type ProjectHealthReport = { "schemaVersion": "agent-project-health-report-v1"; "classification": "PUBLIC_MARKET"; "organizationId": string; "runId": string; "projectId": string; "captureHash": string; "sourceCutoff": string; "status": "PARTIAL" | "ABSTAINED"; "marketHealth": "NOT_ASSESSED"; "findings": Array<ProjectHealthFinding>; "gaps": Array<string>; "nextChecks": Array<"REFRESH_PUBLIC_OBSERVATION" | "VERIFY_TRANSFER_BEHAVIOR" | "VERIFY_LIQUIDITY_CONTROL" | "COLLECT_BASELINE_OBSERVATION">; "evidence": Array<SavedProjectObservation>; "financialAuthority": false; };

export type SavedProjectHealthResult = { "schemaVersion": "saved-project-health-result-v1"; "organizationId": string; "runId": string; "resultVersion": string; "completedAt": string; "report": ProjectHealthReport; "applicability": { "scope": "PROJECT_OBSERVATION_VERSION_ONLY"; "status": "SAME_SUBJECT_VERSION" | "SUBJECT_CHANGED" | "SUBJECT_UNAVAILABLE"; "savedResourceVersion": string; "currentResourceVersion": string | null; }; };

export type AgentHealthResult = SavedHealthResult | SavedProjectHealthResult;

export type ProposalReviewSource = { "generation": "V1" | "V2"; "recordType": "PROPOSAL" | "PROPOSAL_WORKSPACE"; "recordId": string; "version": string; "artifactHash": string | null; "economicHash": string; };

export type ProposalReviewDependency = { "kind": "SIMULATION" | "SIMULATION_STUDY" | "STRATEGY_DEFINITION" | "STRATEGY_ADMISSION" | "POLICY_INTENT_DRAFT"; "recordId": string | null; "resourceVersion": string | null; "artifactHash": string | null; "status": "AVAILABLE" | "UNAVAILABLE" | "BINDING_MISMATCH"; "recordedStatus": string | null; };

export type ProposalReviewTokenFlow = { "token": string; "amountAtomic": string; "destination": string; "basis": "PERSISTED_FLOW_NOT_EXECUTION_VERIFIED"; };

export type ProposalReviewFinding = { "id": string; "summary": string; "evidenceIds": Array<string>; };

export type ProposalReviewCheck = { "id": string; "status": "RECORDED_PASS" | "RECORDED_FAIL" | "UNAVAILABLE" | "NOT_APPLICABLE"; "detail": string; };

export type ProposalReviewReport = { "schemaVersion": "agent-proposal-review-report-v1"; "organizationId": string; "runId": string; "reviewScope": "SAVED_PROPOSAL_EVIDENCE"; "status": "PARTIAL" | "ABSTAINED"; "reviewedAt": string; "sourceCutoff": string; "captureHash": string; "reviewedProposal": ProposalReviewSource; "findings": Array<ProposalReviewFinding>; "checks": Array<ProposalReviewCheck>; "metrics": Array<{ "id": string; "valueAtomic": string; "quoteProfile": string | null; "unit": "QUOTE_ATOMIC"; "basis": "PERSISTED_ASSERTION" | "EXACT_DIFFERENCE_OF_ASSERTIONS"; }>; "costs": Array<{ "category": "GAS" | "INCENTIVE" | "PLATFORM_FEE" | "CAPITAL_LOSS" | "VENUE_FEE" | "SLIPPAGE"; "status": "DECLARED_ASSUMPTION" | "UNAVAILABLE"; "amountAtomic": string | null; "reason": string; }>; "tokenFlows": Array<ProposalReviewTokenFlow>; "dependencies": Array<ProposalReviewDependency>; "gaps": Array<string>; "nextChecks": Array<"INSPECT_REFERENCED_EVIDENCE" | "VERIFY_COMPLETE_COSTS" | "REFRESH_PROPOSAL" | "RECHECK_POLICY_AND_EXPIRY" | "USE_EXISTING_HUMAN_APPROVAL_WORKFLOW">; "approvalAuthorityGranted": false; "executionAuthorityGranted": false; };

export type SavedProposalReviewResult = { "schemaVersion": "saved-proposal-review-result-v1"; "organizationId": string; "runId": string; "resultVersion": string; "completedAt": string; "report": ProposalReviewReport; "applicability": { "scope": "PROPOSAL_PACKET_AND_REFERENCED_GENERATIONS"; "status": "SAME_ECONOMIC_PACKET" | "OPERATIONAL_STATUS_CHANGED" | "ECONOMIC_PACKET_CHANGED" | "SUBJECT_UNAVAILABLE"; "checkedAt": string; "currentSourceVersion": string | null; "currentEconomicHash": string | null; "expired": boolean | null; "dependenciesChanged": boolean; }; };

export type CandidateReviewReport = { "schemaVersion": "agent-candidate-review-report-v1"; "organizationId": string; "runId": string; "reviewScope": "RESEARCH_CANDIDATE_EVIDENCE"; "status": "PARTIAL"; "captureHash": string; "sourceCutoff": string; "reviewedAt": string; "reviewedCandidate": { "packId": string; "resourceVersion": string; "contentHash": string; }; "checks": Array<{ "id": string; "status": "RECORDED_PASS" | "RECORDED_FAIL" | "UNAVAILABLE"; "detail": string; }>; "findings": Array<{ "id": string; "summary": string; "evidenceIds": Array<string>; }>; "trialReferences": Array<{ "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }>; "costs": Array<{ "category": "GAS" | "INCENTIVE" | "PLATFORM_FEE" | "CAPITAL_LOSS" | "VENUE_FEE" | "SLIPPAGE"; "status": "UNAVAILABLE"; "amountAtomic": null; "reason": string; }>; "gaps": Array<string>; "nextChecks": Array<"INSPECT_RESEARCH_TRIALS" | "RESOLVE_MISSING_SCENARIOS" | "VERIFY_PROJECT_AND_QUOTE_BINDING" | "PREPARE_OPERATIONAL_PREREQUISITES" | "USE_SEPARATE_HUMAN_APPROVAL">; "approvalAuthorityGranted": false; "executionAuthorityGranted": false; "publicationAuthorityGranted": false; };

export type SavedCandidateReviewResult = { "schemaVersion": "saved-candidate-review-result-v1"; "organizationId": string; "runId": string; "resultVersion": string; "completedAt": string; "report": { "schemaVersion": "agent-candidate-review-report-v1"; "organizationId": string; "runId": string; "reviewScope": "RESEARCH_CANDIDATE_EVIDENCE"; "status": "PARTIAL"; "captureHash": string; "sourceCutoff": string; "reviewedAt": string; "reviewedCandidate": { "packId": string; "resourceVersion": string; "contentHash": string; }; "checks": Array<{ "id": string; "status": "RECORDED_PASS" | "RECORDED_FAIL" | "UNAVAILABLE"; "detail": string; }>; "findings": Array<{ "id": string; "summary": string; "evidenceIds": Array<string>; }>; "trialReferences": Array<{ "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }>; "costs": Array<{ "category": "GAS" | "INCENTIVE" | "PLATFORM_FEE" | "CAPITAL_LOSS" | "VENUE_FEE" | "SLIPPAGE"; "status": "UNAVAILABLE"; "amountAtomic": null; "reason": string; }>; "gaps": Array<string>; "nextChecks": Array<"INSPECT_RESEARCH_TRIALS" | "RESOLVE_MISSING_SCENARIOS" | "VERIFY_PROJECT_AND_QUOTE_BINDING" | "PREPARE_OPERATIONAL_PREREQUISITES" | "USE_SEPARATE_HUMAN_APPROVAL">; "approvalAuthorityGranted": false; "executionAuthorityGranted": false; "publicationAuthorityGranted": false; }; "applicability": { "scope": "CANDIDATE_CONTENT_AND_REFERENCED_GENERATIONS"; "status": "SAME_CONTENT" | "LIFECYCLE_CHANGED" | "CONTENT_CHANGED" | "SUBJECT_UNAVAILABLE"; "checkedAt": string; "currentPackResourceVersion": string | null; "currentContentHash": string | null; "currentIssuerIntentResourceVersion": string | null; "currentProjectResourceVersion": string | null; "issuerIntentChanged": boolean; "projectObservationChanged": boolean; }; };

export type AgentRunResult = AgentHealthResult | SavedProposalReviewResult | SavedResearchResult | SavedCandidateReviewResult;

export type AgentRunSummary = { "organizationId": string; "runId": string; "kind": "HEALTH_INVESTIGATION" | "PROPOSAL_REVIEW" | "WHAT_IF_RESEARCH"; "mode"?: "PLAN"; "question": string; "state": "QUEUED" | "RUNNING" | "WAITING_FOR_INPUT" | "WAITING_FOR_CHILDREN" | "COMPLETED" | "PARTIAL" | "ABSTAINED" | "FAILED" | "CANCELLED"; "phase": "ADMITTED" | "CAPTURING_EVIDENCE" | "CHECKING_SOURCES" | "COMPARING_EVIDENCE" | "PLANNING" | "READING_EVIDENCE" | "WAITING_FOR_INPUT" | "WAITING_FOR_STUDIES" | "VALIDATING_REPORT" | "FINISHED"; "sourceCutoff": string; "deadline": string; "createdAt": string; "updatedAt": string; "resourceVersion": string; "cancellationRequestedAt": string | null; "subject": { "generation": "V1" | "V2" | "PROJECT" | "DECISION_PACK"; "recordType": "VAULT" | "PROPOSAL" | "PROPOSAL_WORKSPACE" | "ISSUER_INTENT" | "SAVED_PUBLIC_PROJECT" | "DECISION_PACK"; "recordId": string; "vaultId"?: string; "updatedAt"?: string; "resourceVersion"?: string; "observationSequence"?: string; "baselineSequence"?: string | null; "window"?: { "start": string; "end": string; }; "baselineWindow"?: { "start": string; "end": string; }; }; };

export type AgentClarification = { "schemaVersion": "agent-clarification-v1"; "questionId": string; "prompt": string; "contextHash": string; "options": Array<{ "id": string; "label": string; "description": string; }>; };

export type AgentRunLimits = { "maximumToolExecutions": number; "maximumOptionalToolCalls": number; "maximumModelAttempts": number; "maximumEvidenceRecords": number; "maximumEvidenceBytesPerRequest": number; "maximumTokens": number; "maximumCostMicrounits": string; "costCurrency": "USD"; "maximumResearchTrials": number; "maximumComputeUnits": number; };

export type AgentRunDetail = { "run": AgentRunSummary; "pendingQuestion": AgentClarification | null; "steps": { "queued": number; "running": number; "completed": number; "failed": number; "uncertain": number; }; "activityHighWater": string; "limits": AgentRunLimits; "usage": null; "resultAvailable": boolean; "controls": { "canCancel": boolean; "canRespond": boolean; }; };

export type AgentRunList = { "runs": Array<AgentRunSummary>; "nextCursor": string | null; };

export type AgentActivityEvent = { "sequence": string; "kind": "RUN_STATE" | "STEP_STATE"; "state": "QUEUED" | "RUNNING" | "WAITING_FOR_INPUT" | "WAITING_FOR_CHILDREN" | "COMPLETED" | "PARTIAL" | "ABSTAINED" | "FAILED" | "CANCELLED"; "phase": "ADMITTED" | "CAPTURING_EVIDENCE" | "CHECKING_SOURCES" | "COMPARING_EVIDENCE" | "PLANNING" | "READING_EVIDENCE" | "WAITING_FOR_INPUT" | "WAITING_FOR_STUDIES" | "VALIDATING_REPORT" | "FINISHED"; "stepSequence": number | null; "stepKind": "SOURCE_CAPTURE" | "DETERMINISTIC_CHECK" | "TOOL_READ" | "MODEL_CALL" | "CLARIFICATION" | "RESEARCH_DISPATCH" | "RESEARCH_RESUME" | "REPORT_VALIDATION" | null; "stepState": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "UNCERTAIN" | null; "occurredAt": string; };

export type AgentActivityPage = { "organizationId": string; "runId": string; "events": Array<AgentActivityEvent>; "nextAfter": string; "hasMore": boolean; "highWater": string; };

export type PublicProjectResolveRequest = { "identifier": string; };

export type PublicProjectAnalysis = { "schemaVersion": "public-project-analysis-v1"; "chainId": 8453; "identifier": string; "token": { "address": string; "name": string | null; "symbol": string | null; "decimals": number | null; } | null; "project": { "virtualsProjectId": string | null; "url": string | null; "relationship": "PUBLIC_IDENTIFIER_ONLY"; }; "launchStage": { "status": "UNKNOWN" | "POOL_OBSERVED"; "explanation": string; }; "observation": { "blockNumber": string; "blockHash": string; "blockTimestamp": string; "observedAt": string; "readAt": string; "recordedAt": null; "providerId": string; "providerGeneration": string; "finality": "FINALIZED"; "finalityVerification": "SINGLE_RPC_ASSERTION"; } | null; "pools": Array<{ "address": string; "factory": string; "token0": string; "token1": string; "reserve0Atomic": string; "reserve1Atomic": string; "reserve0Decimals": number | null; "reserve1Decimals": number | null; "verification": "CANONICAL_FACTORY_AND_PAIR_AT_BLOCK"; "quoteStatus": "UNAVAILABLE_TRANSFER_BEHAVIOR"; }>; "gaps": Array<string>; "financialAuthority": false; };

export type PublicLiquidityInvestigationRequest = { "identifier": string; "question": "POOL_RESERVE_SCALE_V1"; "quoteTradeSizeAtomic": string | null; };

export type PublicLiquidityInvestigation = { "schemaVersion": "public-liquidity-investigation-v1"; "question": "POOL_RESERVE_SCALE_V1"; "investigationId": string; "requestedQuoteSizeAtomic": string | null; "source": PublicProjectAnalysis; "finding": { "state": "AVAILABLE" | "UNAVAILABLE"; "poolAddress": string | null; "quoteReserveAtomic": string | null; "quoteDecimals": number | null; "sizeToReservePips": string | null; "reason": "NO_QUOTE_SIZE" | "NO_VERIFIED_POOL" | "QUOTE_PRECISION_UNAVAILABLE" | "ZERO_QUOTE_RESERVE" | "SOURCE_INCONSISTENT" | "VERIFIED_RESERVE_RATIO_ONLY"; }; "limitations": Array<string>; "financialAuthority": false; };

export type SavedProjectObservation = { "sequence": string; "recordedAt": string; "resourceVersion": string; "analysis": PublicProjectAnalysis; };

export type SavedProjectObservationMetadata = { "sequence": string; "recordedAt": string; "resourceVersion": string; };

export type SavedPublicProject = { "organizationId": string; "projectId": string; "identifier": string; "tokenAddress": string | null; "createdAt": string; "updatedAt": string; "resourceVersion": string; "currentSequence": string; "latestObservation": SavedProjectObservation; };

export type SavedProjectWriteReceipt = { "project": SavedPublicProject; "replayed": boolean; };

export type SavedProjectList = { "projects": Array<SavedPublicProject>; "nextCursor": string | null; };

export type SavedProjectObservationList = { "observations": Array<SavedProjectObservationMetadata>; "nextCursor": string | null; };

export type WorkspacePlan = { "id": string; "version": string; "name": string; "description": string; "price": { "currency": "USD"; "amountMinor": string; "billingBasis": "ONE_TIME" | "MONTHLY" | "ANNUAL"; }; "features": Array<"PUBLIC_ANALYSIS" | "PRIVATE_TREASURY" | "TEAM_COLLABORATION" | "SCENARIO_RESEARCH" | "PROPOSAL_REVIEW" | "MONITORING" | "DECISION_PACKS">; "limits": { "projects": number; "teamSeats": number; "analyses": number; "analysisPeriod": "ONE_TIME" | "MONTHLY" | "ANNUAL"; "monitoringIntervalMinutes": number | null; }; "overagePolicy": "NO_AUTOMATIC_OVERAGE"; "cancellationTerms": string; };

export type WorkspacePlanCatalog = { "schemaVersion": "workspace-plan-catalog-v1"; "status": "NOT_CONFIGURED" | "PREVIEW"; "catalogVersion": string | null; "validUntil": string | null; "plans": Array<WorkspacePlan>; "purchaseAvailability": "UNAVAILABLE"; "financialAuthority": false; };

export type AcpOffering = { "id": string; "version": string; "name": string; "description": string; "requirements": { "kind": "PUBLIC_VIRTUALS_PROJECT"; "chainId": 8453; }; "deliverable": { "kind": "PUBLIC_PROJECT_ANALYSIS_V1"; }; "price": { "currency": "USDC"; "amountAtomic": string; }; "slaMinutes": number; "fundTransfer": false; };

export type AcpOfferingPreview = { "schemaVersion": "acp-offering-preview-v1"; "status": "NOT_CONFIGURED" | "PREVIEW"; "catalogVersion": string | null; "validUntil": string | null; "offering": AcpOffering | null; "purchaseAvailability": "UNAVAILABLE"; "financialAuthority": false; };

export type CreateDecisionPack = { "projectId": string; "observationSequence": string; "expectedProjectResourceVersion": string; "question": string; "assumptions": Array<string>; };

export type CreateTreasuryDecisionPack = { "projectionId": string; "projectionResourceVersion": string; "question": string; "assumptions": Array<string>; };

export type TreasuryScenarioDecisionPack = { "schemaVersion": "decision-pack-v3"; "organizationId": string; "packId": string; "sequence": string; "resourceVersion": string; "createdAt": string; "recordedAt": string; "state": "DRAFT" | "READY_FOR_REVIEW" | "DECISION_RECORDED" | "FOLLOW_UP_DUE" | "CLOSED" | "SUPERSEDED"; "scope": "TREASURY_SCENARIO_REVIEW"; "coverage": "PARTIAL"; "question": string; "project": { "projectId": string; "observationSequence": string; "resourceVersion": string; }; "healthReport": { "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "runId": string; "resultVersion": string; "captureHash": string; "sourceCutoff": string; "status": "PARTIAL" | "ABSTAINED"; } | null; "assumptions": { "version": string; "items": Array<string>; }; "references": { "baselineStudy": null; "alternativeStudies": Array<JsonValue>; "proposalReview": null; "treasuryProjection": { "kind": "DECLARED_TREASURY_SCENARIO"; "projectionId": string; "resourceVersion": string; "modelHash": string; "sourceHash": string; "assumptions": { "id": string; "resourceVersion": string; }; "reconciliation": { "id": string; "resourceVersion": string; }; "sourceCutoff": string; "relation": "HISTORICAL_SUPPORTING_EVIDENCE_ONLY"; "provenance": "DECLARED_SCENARIO"; "spendability": "NOT_ESTABLISHED"; }; "commercialOrder": null; }; "unsupportedReferences": Array<JsonValue>; "decision": { "choice": "DO_NOTHING" | "REQUEST_MORE_EVIDENCE" | "TAKE_TO_SEPARATE_APPROVAL"; "rationale": string; "recordedBy": string; "recordedAt": string; "followUpAt": string | null; } | null; "closure": { "note": string; "recordedBy": string; "recordedAt": string; } | null; "supersededBy": string | null; "financialAuthority": false; "publicationAuthority": false; };

export type CreateResearchDecisionPack = { "projectId": string; "observationSequence": string; "expectedProjectResourceVersion": string; "question": string; "assumptions": Array<string>; "researchRunId": string; "researchResultVersion": string; "expectedIssuerIntentResourceVersion": string; "selectedVariant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "association": "USER_SELECTED_RESEARCH_CONTEXT"; };

export type PublicEvidenceDecisionPack = { "schemaVersion": "decision-pack-v1"; "organizationId": string; "packId": string; "sequence": string; "resourceVersion": string; "createdAt": string; "recordedAt": string; "state": "DRAFT" | "READY_FOR_REVIEW" | "DECISION_RECORDED" | "FOLLOW_UP_DUE" | "CLOSED" | "SUPERSEDED"; "scope": "PUBLIC_EVIDENCE_REVIEW"; "coverage": "PARTIAL"; "question": string; "project": { "projectId": string; "observationSequence": string; "resourceVersion": string; }; "healthReport": { "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "runId": string; "resultVersion": string; "captureHash": string; "sourceCutoff": string; "status": "PARTIAL" | "ABSTAINED"; } | null; "assumptions": { "version": string; "items": Array<string>; }; "references": { "baselineStudy": null; "alternativeStudies": Array<JsonValue>; "proposalReview": null; "treasuryProjection": null; "commercialOrder": null; }; "unsupportedReferences": Array<JsonValue>; "decision": { "choice": "DO_NOTHING" | "REQUEST_MORE_EVIDENCE" | "TAKE_TO_SEPARATE_APPROVAL"; "rationale": string; "recordedBy": string; "recordedAt": string; "followUpAt": string | null; } | null; "closure": { "note": string; "recordedBy": string; "recordedAt": string; } | null; "supersededBy": string | null; "financialAuthority": false; "publicationAuthority": false; };

export type ResearchCandidateDecisionPack = { "schemaVersion": "decision-pack-v2"; "organizationId": string; "packId": string; "sequence": string; "resourceVersion": string; "createdAt": string; "recordedAt": string; "state": "DRAFT" | "READY_FOR_REVIEW" | "DECISION_RECORDED" | "FOLLOW_UP_DUE" | "CLOSED" | "SUPERSEDED"; "scope": "RESEARCH_CANDIDATE_REVIEW"; "coverage": "PARTIAL"; "question": string; "project": { "projectId": string; "observationSequence": string; "resourceVersion": string; }; "healthReport": { "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "runId": string; "resultVersion": string; "captureHash": string; "sourceCutoff": string; "status": "PARTIAL" | "ABSTAINED"; } | null; "assumptions": { "version": string; "items": Array<string>; }; "references": { "baselineStudy": { "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }; "alternativeStudies": Array<{ "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }>; "proposalReview": { "kind": "CANDIDATE_REVIEW"; "runId": string; "resultVersion": string; "captureHash": string; "contentHash": string; "reviewedPackResourceVersion": string; "sourceCutoff": string; "status": "PARTIAL"; "relation": "ANALYSIS_REVIEW_ONLY"; } | null; "treasuryProjection": null; "commercialOrder": null; }; "unsupportedReferences": Array<JsonValue> | Array<JsonValue>; "decision": { "choice": "DO_NOTHING" | "REQUEST_MORE_EVIDENCE" | "TAKE_TO_SEPARATE_APPROVAL"; "rationale": string; "recordedBy": string; "recordedAt": string; "followUpAt": string | null; } | null; "closure": { "note": string; "recordedBy": string; "recordedAt": string; } | null; "supersededBy": string | null; "financialAuthority": false; "publicationAuthority": false; "contentHash": string; "sourceAssociation": { "relation": "USER_SELECTED_RESEARCH_CONTEXT"; "assertedBy": string; "assertedAt": string; "ownershipVerified": false; "quoteUnitsVerified": false; }; "research": { "runId": string; "resultVersion": string; "protocolHash": string; "sourceCutoff": string; "issuerIntent": { "id": string; "resourceVersion": string; "artifactHash": string; }; "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "objective": { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "comparisonStatus": "BASELINE_UNAVAILABLE" | "COMPLETE" | "PARTIAL"; "quote": { "symbol": string; "assetId": null; "decimals": null; "unit": "ISSUER_INTENT_QUOTE_ATOMIC"; }; "limitations": Array<"CURRENT_IS_ENGINE_GENERATED_NOT_ACTUAL_HOLDINGS" | "COMPARISON_DOES_NOT_PROVE_EQUAL_CAPITAL_SUPERIORITY" | "MARGINAL_PERCENTILE_DIFFERENCES_ARE_NOT_PAIRED_DIFFERENCE_PERCENTILES" | "RESERVE_BREACH_IS_COMPOSITE_RESERVE_OR_ORACLE_BLOCKED_EVENT" | "MODEL_OUTCOMES_ARE_NOT_FINANCIAL_GUARANTEES" | "ARTIFACT_HASHES_DO_NOT_REPRODUCE_ENGINE_OUTPUT">; "trials": Array<{ "reference": { "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }; "label": string; "comparisonStatus": "PENDING" | "FAILED" | "CANCELLED" | "INVALID" | "INCOMPATIBLE" | "BASELINE_UNAVAILABLE" | "COMPARABLE"; "reasons": Array<string>; "warningCount": number; "selected": { "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "eligible": boolean; "ineligibilityReasons": Array<string>; } | null; }>; }; "candidate": { "selectedVariant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "capitalPlan": { "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }; "baselineEligible": boolean; "status": "BLOCKED_BASELINE_UNAVAILABLE" | "BLOCKED_BASELINE_INELIGIBLE" | "INCOMPLETE_ALTERNATIVES" | "INELIGIBLE_IN_ALTERNATIVES" | "ELIGIBLE_IN_CAPTURED_SCENARIOS"; "rankingScope": "WITHIN_SCENARIO_VARIANTS"; }; };

export type DecisionPackCommand = { "action": "EDIT_DRAFT"; "question": string; "assumptions": Array<string>; } | { "action": "ATTACH_CANDIDATE_REVIEW"; "runId": string; "resultVersion": string; } | { "action": "ATTACH_TREASURY_PROJECTION"; "projectionId": string; "projectionResourceVersion": string; } | { "action": "ATTACH_HEALTH"; "runId": string; "resultVersion": string; } | { "action": "READY_FOR_REVIEW"; } | { "action": "RECORD_DECISION"; "choice": "DO_NOTHING" | "REQUEST_MORE_EVIDENCE" | "TAKE_TO_SEPARATE_APPROVAL"; "rationale": string; "followUpAt": string | null; } | { "action": "MARK_FOLLOW_UP_DUE"; } | { "action": "CLOSE"; "note": string; } | { "action": "SUPERSEDE"; "replacementPackId": string; };

export type DecisionPack = { "schemaVersion": "decision-pack-v1"; "organizationId": string; "packId": string; "sequence": string; "resourceVersion": string; "createdAt": string; "recordedAt": string; "state": "DRAFT" | "READY_FOR_REVIEW" | "DECISION_RECORDED" | "FOLLOW_UP_DUE" | "CLOSED" | "SUPERSEDED"; "scope": "PUBLIC_EVIDENCE_REVIEW"; "coverage": "PARTIAL"; "question": string; "project": { "projectId": string; "observationSequence": string; "resourceVersion": string; }; "healthReport": { "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "runId": string; "resultVersion": string; "captureHash": string; "sourceCutoff": string; "status": "PARTIAL" | "ABSTAINED"; } | null; "assumptions": { "version": string; "items": Array<string>; }; "references": { "baselineStudy": null; "alternativeStudies": Array<JsonValue>; "proposalReview": null; "treasuryProjection": null; "commercialOrder": null; }; "unsupportedReferences": Array<JsonValue>; "decision": { "choice": "DO_NOTHING" | "REQUEST_MORE_EVIDENCE" | "TAKE_TO_SEPARATE_APPROVAL"; "rationale": string; "recordedBy": string; "recordedAt": string; "followUpAt": string | null; } | null; "closure": { "note": string; "recordedBy": string; "recordedAt": string; } | null; "supersededBy": string | null; "financialAuthority": false; "publicationAuthority": false; } | { "schemaVersion": "decision-pack-v2"; "organizationId": string; "packId": string; "sequence": string; "resourceVersion": string; "createdAt": string; "recordedAt": string; "state": "DRAFT" | "READY_FOR_REVIEW" | "DECISION_RECORDED" | "FOLLOW_UP_DUE" | "CLOSED" | "SUPERSEDED"; "scope": "RESEARCH_CANDIDATE_REVIEW"; "coverage": "PARTIAL"; "question": string; "project": { "projectId": string; "observationSequence": string; "resourceVersion": string; }; "healthReport": { "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "runId": string; "resultVersion": string; "captureHash": string; "sourceCutoff": string; "status": "PARTIAL" | "ABSTAINED"; } | null; "assumptions": { "version": string; "items": Array<string>; }; "references": { "baselineStudy": { "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }; "alternativeStudies": Array<{ "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }>; "proposalReview": { "kind": "CANDIDATE_REVIEW"; "runId": string; "resultVersion": string; "captureHash": string; "contentHash": string; "reviewedPackResourceVersion": string; "sourceCutoff": string; "status": "PARTIAL"; "relation": "ANALYSIS_REVIEW_ONLY"; } | null; "treasuryProjection": null; "commercialOrder": null; }; "unsupportedReferences": Array<JsonValue> | Array<JsonValue>; "decision": { "choice": "DO_NOTHING" | "REQUEST_MORE_EVIDENCE" | "TAKE_TO_SEPARATE_APPROVAL"; "rationale": string; "recordedBy": string; "recordedAt": string; "followUpAt": string | null; } | null; "closure": { "note": string; "recordedBy": string; "recordedAt": string; } | null; "supersededBy": string | null; "financialAuthority": false; "publicationAuthority": false; "contentHash": string; "sourceAssociation": { "relation": "USER_SELECTED_RESEARCH_CONTEXT"; "assertedBy": string; "assertedAt": string; "ownershipVerified": false; "quoteUnitsVerified": false; }; "research": { "runId": string; "resultVersion": string; "protocolHash": string; "sourceCutoff": string; "issuerIntent": { "id": string; "resourceVersion": string; "artifactHash": string; }; "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "objective": { "metric": "ENDING_VALUE_P50" | "MINIMUM_DEPTH_P5" | "GAS_COST_P50" | "DRAWDOWN_P95" | "RESERVE_BREACH_PROBABILITY"; "direction": "MAXIMIZE" | "MINIMIZE"; }; "comparisonStatus": "BASELINE_UNAVAILABLE" | "COMPLETE" | "PARTIAL"; "quote": { "symbol": string; "assetId": null; "decimals": null; "unit": "ISSUER_INTENT_QUOTE_ATOMIC"; }; "limitations": Array<"CURRENT_IS_ENGINE_GENERATED_NOT_ACTUAL_HOLDINGS" | "COMPARISON_DOES_NOT_PROVE_EQUAL_CAPITAL_SUPERIORITY" | "MARGINAL_PERCENTILE_DIFFERENCES_ARE_NOT_PAIRED_DIFFERENCE_PERCENTILES" | "RESERVE_BREACH_IS_COMPOSITE_RESERVE_OR_ORACLE_BLOCKED_EVENT" | "MODEL_OUTCOMES_ARE_NOT_FINANCIAL_GUARANTEES" | "ARTIFACT_HASHES_DO_NOT_REPRODUCE_ENGINE_OUTPUT">; "trials": Array<{ "reference": { "kind": "RESEARCH_TRIAL"; "runId": string; "protocolHash": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; "inputHash": string; "artifactHash": string | null; "state": "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED"; "recordedAt": string | null; "failureCode": string | null; }; "label": string; "comparisonStatus": "PENDING" | "FAILED" | "CANCELLED" | "INVALID" | "INCOMPATIBLE" | "BASELINE_UNAVAILABLE" | "COMPARABLE"; "reasons": Array<string>; "warningCount": number; "selected": { "variant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "eligible": boolean; "ineligibilityReasons": Array<string>; } | null; }>; }; "candidate": { "selectedVariant": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "capitalPlan": { "kind": "CURRENT" | "RECOMMENDED" | "CONSERVATIVE" | "CAPITAL_EFFICIENT" | "EMERGENCY"; "requiredCapitalQuote": string; "deployableCapitalQuote": string; "stableReserveQuote": string; "emergencyReserveQuote": string; "rangeWidthPips": number; "expectedSlippagePips": number; "expectedFeeIncomeLowQuote": string; "expectedFeeIncomeHighQuote": string; "inventoryExposurePips": number; "maximumDailyTurnoverPips": number; "satisfiesIntent": boolean; "reasons": Array<string>; }; "baselineEligible": boolean; "status": "BLOCKED_BASELINE_UNAVAILABLE" | "BLOCKED_BASELINE_INELIGIBLE" | "INCOMPLETE_ALTERNATIVES" | "INELIGIBLE_IN_ALTERNATIVES" | "ELIGIBLE_IN_CAPTURED_SCENARIOS"; "rankingScope": "WITHIN_SCENARIO_VARIANTS"; }; } | { "schemaVersion": "decision-pack-v3"; "organizationId": string; "packId": string; "sequence": string; "resourceVersion": string; "createdAt": string; "recordedAt": string; "state": "DRAFT" | "READY_FOR_REVIEW" | "DECISION_RECORDED" | "FOLLOW_UP_DUE" | "CLOSED" | "SUPERSEDED"; "scope": "TREASURY_SCENARIO_REVIEW"; "coverage": "PARTIAL"; "question": string; "project": { "projectId": string; "observationSequence": string; "resourceVersion": string; }; "healthReport": { "question": string; "relation": "SUPPORTING_EVIDENCE_ONLY"; "runId": string; "resultVersion": string; "captureHash": string; "sourceCutoff": string; "status": "PARTIAL" | "ABSTAINED"; } | null; "assumptions": { "version": string; "items": Array<string>; }; "references": { "baselineStudy": null; "alternativeStudies": Array<JsonValue>; "proposalReview": null; "treasuryProjection": { "kind": "DECLARED_TREASURY_SCENARIO"; "projectionId": string; "resourceVersion": string; "modelHash": string; "sourceHash": string; "assumptions": { "id": string; "resourceVersion": string; }; "reconciliation": { "id": string; "resourceVersion": string; }; "sourceCutoff": string; "relation": "HISTORICAL_SUPPORTING_EVIDENCE_ONLY"; "provenance": "DECLARED_SCENARIO"; "spendability": "NOT_ESTABLISHED"; }; "commercialOrder": null; }; "unsupportedReferences": Array<JsonValue>; "decision": { "choice": "DO_NOTHING" | "REQUEST_MORE_EVIDENCE" | "TAKE_TO_SEPARATE_APPROVAL"; "rationale": string; "recordedBy": string; "recordedAt": string; "followUpAt": string | null; } | null; "closure": { "note": string; "recordedBy": string; "recordedAt": string; } | null; "supersededBy": string | null; "financialAuthority": false; "publicationAuthority": false; };

export type DecisionPackWriteReceipt = { "pack": DecisionPack; "replayed": boolean; };

export type DecisionPackList = { "packs": Array<DecisionPack>; "nextCursor": string | null; };

export type DecisionPackHistory = { "versions": Array<{ "sequence": string; "resourceVersion": string; "state": "DRAFT" | "READY_FOR_REVIEW" | "DECISION_RECORDED" | "FOLLOW_UP_DUE" | "CLOSED" | "SUPERSEDED"; "recordedAt": string; }>; "nextCursor": string | null; };

export type SignedTreasuryEvidence = { "payload": { "schemaVersion": "treasury-custody-evidence-v1"; "organizationId": string; "projectId": string; "evidenceId": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "provider": { "id": string; "resourceVersion": string; "attestationHash": string; }; "observation": { "chainId": number; "genesisHash": string; "token": string; "decimals": number; "custodyAccount": string; "amountAtomic": string; "blockNumber": string; "blockHash": string; "blockTimestamp": string; "finality": "FINALIZED"; }; "observedAt": string; "sourceCutoff": string; "expiresAt": string; }; "payloadHash": string; "signature": string; };

export type PersistedTreasuryEvidence = { "schemaVersion": "persisted-treasury-custody-evidence-v1"; "organizationId": string; "evidenceId": string; "resourceVersion": string; "recordedAt": string; "recordedBy": string; "verification": { "schemaVersion": "verified-treasury-custody-evidence-v1"; "evidence": { "payload": { "schemaVersion": "treasury-custody-evidence-v1"; "organizationId": string; "projectId": string; "evidenceId": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "provider": { "id": string; "resourceVersion": string; "attestationHash": string; }; "observation": { "chainId": number; "genesisHash": string; "token": string; "decimals": number; "custodyAccount": string; "amountAtomic": string; "blockNumber": string; "blockHash": string; "blockTimestamp": string; "finality": "FINALIZED"; }; "observedAt": string; "sourceCutoff": string; "expiresAt": string; }; "payloadHash": string; "signature": string; }; "observation": { "chainId": number; "genesisHash": string; "token": string; "decimals": number; "custodyAccount": string; "amountAtomic": string; "blockNumber": string; "blockHash": string; "blockTimestamp": string; "finality": "FINALIZED"; }; "checkedAt": string; "authority": { "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "provider": { "id": string; "resourceVersion": string; "attestationHash": string; }; }; "quorum": { "kind": "CONFIGURED_OPERATOR_MAJORITY"; "members": 3 | 5 | 7; "required": number; }; "replayProtection": "REQUIRES_PERSISTED_EVIDENCE_ID_UNIQUENESS"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }; "replayProtection": "TENANT_EVIDENCE_ID_EXACT_CONTENT"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; };

export type TreasuryEvidenceWrite = { "record": { "schemaVersion": "persisted-treasury-custody-evidence-v1"; "organizationId": string; "evidenceId": string; "resourceVersion": string; "recordedAt": string; "recordedBy": string; "verification": { "schemaVersion": "verified-treasury-custody-evidence-v1"; "evidence": { "payload": { "schemaVersion": "treasury-custody-evidence-v1"; "organizationId": string; "projectId": string; "evidenceId": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "provider": { "id": string; "resourceVersion": string; "attestationHash": string; }; "observation": { "chainId": number; "genesisHash": string; "token": string; "decimals": number; "custodyAccount": string; "amountAtomic": string; "blockNumber": string; "blockHash": string; "blockTimestamp": string; "finality": "FINALIZED"; }; "observedAt": string; "sourceCutoff": string; "expiresAt": string; }; "payloadHash": string; "signature": string; }; "observation": { "chainId": number; "genesisHash": string; "token": string; "decimals": number; "custodyAccount": string; "amountAtomic": string; "blockNumber": string; "blockHash": string; "blockTimestamp": string; "finality": "FINALIZED"; }; "checkedAt": string; "authority": { "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "provider": { "id": string; "resourceVersion": string; "attestationHash": string; }; }; "quorum": { "kind": "CONFIGURED_OPERATOR_MAJORITY"; "members": 3 | 5 | 7; "required": number; }; "replayProtection": "REQUIRES_PERSISTED_EVIDENCE_ID_UNIQUENESS"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }; "replayProtection": "TENANT_EVIDENCE_ID_EXACT_CONTENT"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }; "replayed": boolean; };

export type TreasuryEvidenceList = { "records": Array<{ "schemaVersion": "persisted-treasury-custody-evidence-v1"; "organizationId": string; "evidenceId": string; "resourceVersion": string; "recordedAt": string; "recordedBy": string; "verification": { "schemaVersion": "verified-treasury-custody-evidence-v1"; "evidence": { "payload": { "schemaVersion": "treasury-custody-evidence-v1"; "organizationId": string; "projectId": string; "evidenceId": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "provider": { "id": string; "resourceVersion": string; "attestationHash": string; }; "observation": { "chainId": number; "genesisHash": string; "token": string; "decimals": number; "custodyAccount": string; "amountAtomic": string; "blockNumber": string; "blockHash": string; "blockTimestamp": string; "finality": "FINALIZED"; }; "observedAt": string; "sourceCutoff": string; "expiresAt": string; }; "payloadHash": string; "signature": string; }; "observation": { "chainId": number; "genesisHash": string; "token": string; "decimals": number; "custodyAccount": string; "amountAtomic": string; "blockNumber": string; "blockHash": string; "blockTimestamp": string; "finality": "FINALIZED"; }; "checkedAt": string; "authority": { "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "provider": { "id": string; "resourceVersion": string; "attestationHash": string; }; }; "quorum": { "kind": "CONFIGURED_OPERATOR_MAJORITY"; "members": 3 | 5 | 7; "required": number; }; "replayProtection": "REQUIRES_PERSISTED_EVIDENCE_ID_UNIQUENESS"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }; "replayProtection": "TENANT_EVIDENCE_ID_EXACT_CONTENT"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }>; "nextCursor": string | null; };

export type ProjectControlIssue = { "identity": { "payload": { "organizationId": string; "projectId": string; "projectResourceVersion": string; "chainId": number; "genesisHash": string; "token": string; "schemaVersion": "project-identity-attestation-v1"; "publisher": { "id": string; "resourceVersion": string; }; "controller": string; "issuedAt": number; "expiresAt": number; }; "payloadHash": string; "signature": string; }; "custodyAccount": string; };

export type ProjectControlProof = { "challenge": { "organizationId": string; "projectId": string; "projectResourceVersion": string; "chainId": number; "genesisHash": string; "token": string; "schemaVersion": "project-control-challenge-v1"; "actorId": string; "controller": string; "custodyAccount": string; "attestationHash": string; "nonce": string; "audience": string; "deployment": string; "purpose": "PROJECT_TREASURY_READ_ACCESS_ONLY"; "issuedAt": number; "expiresAt": number; }; "identity": { "payload": { "organizationId": string; "projectId": string; "projectResourceVersion": string; "chainId": number; "genesisHash": string; "token": string; "schemaVersion": "project-identity-attestation-v1"; "publisher": { "id": string; "resourceVersion": string; }; "controller": string; "issuedAt": number; "expiresAt": number; }; "payloadHash": string; "signature": string; }; "controllerSignature": string; "custodySignature": string; };

export type PersistedProjectControlChallenge = { "schemaVersion": "persisted-project-control-challenge-v1"; "challenge": { "organizationId": string; "projectId": string; "projectResourceVersion": string; "chainId": number; "genesisHash": string; "token": string; "schemaVersion": "project-control-challenge-v1"; "actorId": string; "controller": string; "custodyAccount": string; "attestationHash": string; "nonce": string; "audience": string; "deployment": string; "purpose": "PROJECT_TREASURY_READ_ACCESS_ONLY"; "issuedAt": number; "expiresAt": number; }; "identity": { "payload": { "organizationId": string; "projectId": string; "projectResourceVersion": string; "chainId": number; "genesisHash": string; "token": string; "schemaVersion": "project-identity-attestation-v1"; "publisher": { "id": string; "resourceVersion": string; }; "controller": string; "issuedAt": number; "expiresAt": number; }; "payloadHash": string; "signature": string; }; "anchor": { "chainId": number; "genesisHash": string; "blockNumber": string; "blockHash": string; "finality": "FINALIZED"; }; "resourceVersion": string; "recordedAt": string; };

export type ProjectControlChallengeWrite = { "record": { "schemaVersion": "persisted-project-control-challenge-v1"; "challenge": { "organizationId": string; "projectId": string; "projectResourceVersion": string; "chainId": number; "genesisHash": string; "token": string; "schemaVersion": "project-control-challenge-v1"; "actorId": string; "controller": string; "custodyAccount": string; "attestationHash": string; "nonce": string; "audience": string; "deployment": string; "purpose": "PROJECT_TREASURY_READ_ACCESS_ONLY"; "issuedAt": number; "expiresAt": number; }; "identity": { "payload": { "organizationId": string; "projectId": string; "projectResourceVersion": string; "chainId": number; "genesisHash": string; "token": string; "schemaVersion": "project-identity-attestation-v1"; "publisher": { "id": string; "resourceVersion": string; }; "controller": string; "issuedAt": number; "expiresAt": number; }; "payloadHash": string; "signature": string; }; "anchor": { "chainId": number; "genesisHash": string; "blockNumber": string; "blockHash": string; "finality": "FINALIZED"; }; "resourceVersion": string; "recordedAt": string; }; "replayed": boolean; };

export type ProjectControlAcceptance = { "relationship": { "organizationId": string; "id": string; "resourceVersion": string; "evidenceHash": string; "projectId": string; "chainId": number; "genesisHash": string; "custodyAccount": string; "status": "ACTIVE"; "validFrom": string; "validUntil": string; "verification": "PROJECT_AND_CUSTODY_CONTROL"; }; "proofHash": string; "recordedAt": string; "replayed": boolean; };

export type TreasuryReconciliationPreviewRequest = { "mappings": Array<{ "ledger": { "recordId": string; "resourceVersion": string; "artifactHash": string; }; "custody": { "evidenceId": string; "resourceVersion": string; }; }>; };

export type TreasuryLedgerReconciliation = { "schemaVersion": "treasury-ledger-custody-reconciliation-candidate-v1"; "organizationId": string; "sourceCutoff": string; "status": "REVIEW_CANDIDATE"; "mappings": Array<{ "ledger": { "recordId": string; "resourceVersion": string; "artifactHash": string; }; "custody": { "evidenceId": string; "resourceVersion": string; }; "capitalContainerId": string; "declaredCustodyLocationId": string; "declaredSource": { "kind": "SAFE" | "VAULT" | "EXTERNAL_MANAGER"; "id": string; }; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "custodyAccount": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "projectId": string; "block": { "number": string; "hash": string; "timestamp": string; }; "ledgerAmountAtomic": string; "observedCustodyAmountAtomic": string; "unallocatedCustodySurplusAtomic": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "committedQuoteValuation": string; "obligationIds": Array<string>; "disposition": "PROPOSED_MAPPING_REQUIRES_ADMISSION"; }>; "sourceBindings": { "ledger": Array<{ "recordId": string; "resourceVersion": string; "artifactHash": string; }>; "custody": Array<{ "evidenceId": string; "resourceVersion": string; }>; }; "sourceHash": string; "candidateHash": string; "ledgerConservation": { "scope": "SUPPLIED_IMMUTABLE_ENTRIES_ONLY"; "ledgerVersion": "treasury-ledger-v1" | "treasury-ledger-v2"; "conserved": true; "commitment": string; }; "omittedLedgerEntryIds": Array<string>; "omittedCustodyEvidenceIds": Array<string>; "limitations": Array<JsonValue>; "spendability": "NOT_ESTABLISHED"; "expenseCoverage": "UNKNOWN"; "financialAuthority": false; };

export type SavedTreasuryReconciliation = { "schemaVersion": "treasury-reconciliation-draft-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "state": "DRAFT" | "ACKNOWLEDGED"; "candidate": { "schemaVersion": "treasury-ledger-custody-reconciliation-candidate-v1"; "organizationId": string; "sourceCutoff": string; "status": "REVIEW_CANDIDATE"; "mappings": Array<{ "ledger": { "recordId": string; "resourceVersion": string; "artifactHash": string; }; "custody": { "evidenceId": string; "resourceVersion": string; }; "capitalContainerId": string; "declaredCustodyLocationId": string; "declaredSource": { "kind": "SAFE" | "VAULT" | "EXTERNAL_MANAGER"; "id": string; }; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "custodyAccount": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "projectId": string; "block": { "number": string; "hash": string; "timestamp": string; }; "ledgerAmountAtomic": string; "observedCustodyAmountAtomic": string; "unallocatedCustodySurplusAtomic": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "committedQuoteValuation": string; "obligationIds": Array<string>; "disposition": "PROPOSED_MAPPING_REQUIRES_ADMISSION"; }>; "sourceBindings": { "ledger": Array<{ "recordId": string; "resourceVersion": string; "artifactHash": string; }>; "custody": Array<{ "evidenceId": string; "resourceVersion": string; }>; }; "sourceHash": string; "candidateHash": string; "ledgerConservation": { "scope": "SUPPLIED_IMMUTABLE_ENTRIES_ONLY"; "ledgerVersion": "treasury-ledger-v1" | "treasury-ledger-v2"; "conserved": true; "commitment": string; }; "omittedLedgerEntryIds": Array<string>; "omittedCustodyEvidenceIds": Array<string>; "limitations": Array<JsonValue>; "spendability": "NOT_ESTABLISHED"; "expenseCoverage": "UNKNOWN"; "financialAuthority": false; }; "createdBy": string; "createdAt": string; "recordedAt": string; "acknowledgment": { "recordedBy": string; "recordedAt": string; } | null; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; };

export type TreasuryReconciliationWrite = { "record": { "schemaVersion": "treasury-reconciliation-draft-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "state": "DRAFT" | "ACKNOWLEDGED"; "candidate": { "schemaVersion": "treasury-ledger-custody-reconciliation-candidate-v1"; "organizationId": string; "sourceCutoff": string; "status": "REVIEW_CANDIDATE"; "mappings": Array<{ "ledger": { "recordId": string; "resourceVersion": string; "artifactHash": string; }; "custody": { "evidenceId": string; "resourceVersion": string; }; "capitalContainerId": string; "declaredCustodyLocationId": string; "declaredSource": { "kind": "SAFE" | "VAULT" | "EXTERNAL_MANAGER"; "id": string; }; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "custodyAccount": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "projectId": string; "block": { "number": string; "hash": string; "timestamp": string; }; "ledgerAmountAtomic": string; "observedCustodyAmountAtomic": string; "unallocatedCustodySurplusAtomic": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "committedQuoteValuation": string; "obligationIds": Array<string>; "disposition": "PROPOSED_MAPPING_REQUIRES_ADMISSION"; }>; "sourceBindings": { "ledger": Array<{ "recordId": string; "resourceVersion": string; "artifactHash": string; }>; "custody": Array<{ "evidenceId": string; "resourceVersion": string; }>; }; "sourceHash": string; "candidateHash": string; "ledgerConservation": { "scope": "SUPPLIED_IMMUTABLE_ENTRIES_ONLY"; "ledgerVersion": "treasury-ledger-v1" | "treasury-ledger-v2"; "conserved": true; "commitment": string; }; "omittedLedgerEntryIds": Array<string>; "omittedCustodyEvidenceIds": Array<string>; "limitations": Array<JsonValue>; "spendability": "NOT_ESTABLISHED"; "expenseCoverage": "UNKNOWN"; "financialAuthority": false; }; "createdBy": string; "createdAt": string; "recordedAt": string; "acknowledgment": { "recordedBy": string; "recordedAt": string; } | null; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }; "replayed": boolean; };

export type TreasuryReconciliationList = { "items": Array<{ "schemaVersion": "treasury-reconciliation-draft-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "state": "DRAFT" | "ACKNOWLEDGED"; "candidate": { "schemaVersion": "treasury-ledger-custody-reconciliation-candidate-v1"; "organizationId": string; "sourceCutoff": string; "status": "REVIEW_CANDIDATE"; "mappings": Array<{ "ledger": { "recordId": string; "resourceVersion": string; "artifactHash": string; }; "custody": { "evidenceId": string; "resourceVersion": string; }; "capitalContainerId": string; "declaredCustodyLocationId": string; "declaredSource": { "kind": "SAFE" | "VAULT" | "EXTERNAL_MANAGER"; "id": string; }; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "custodyAccount": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "projectId": string; "block": { "number": string; "hash": string; "timestamp": string; }; "ledgerAmountAtomic": string; "observedCustodyAmountAtomic": string; "unallocatedCustodySurplusAtomic": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "committedQuoteValuation": string; "obligationIds": Array<string>; "disposition": "PROPOSED_MAPPING_REQUIRES_ADMISSION"; }>; "sourceBindings": { "ledger": Array<{ "recordId": string; "resourceVersion": string; "artifactHash": string; }>; "custody": Array<{ "evidenceId": string; "resourceVersion": string; }>; }; "sourceHash": string; "candidateHash": string; "ledgerConservation": { "scope": "SUPPLIED_IMMUTABLE_ENTRIES_ONLY"; "ledgerVersion": "treasury-ledger-v1" | "treasury-ledger-v2"; "conserved": true; "commitment": string; }; "omittedLedgerEntryIds": Array<string>; "omittedCustodyEvidenceIds": Array<string>; "limitations": Array<JsonValue>; "spendability": "NOT_ESTABLISHED"; "expenseCoverage": "UNKNOWN"; "financialAuthority": false; }; "createdBy": string; "createdAt": string; "recordedAt": string; "acknowledgment": { "recordedBy": string; "recordedAt": string; } | null; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }>; "nextCursor": string | null; };

export type TreasuryReconciliationHistory = { "items": Array<{ "schemaVersion": "treasury-reconciliation-draft-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "state": "DRAFT" | "ACKNOWLEDGED"; "candidate": { "schemaVersion": "treasury-ledger-custody-reconciliation-candidate-v1"; "organizationId": string; "sourceCutoff": string; "status": "REVIEW_CANDIDATE"; "mappings": Array<{ "ledger": { "recordId": string; "resourceVersion": string; "artifactHash": string; }; "custody": { "evidenceId": string; "resourceVersion": string; }; "capitalContainerId": string; "declaredCustodyLocationId": string; "declaredSource": { "kind": "SAFE" | "VAULT" | "EXTERNAL_MANAGER"; "id": string; }; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "custodyAccount": string; "relationship": { "id": string; "resourceVersion": string; "evidenceHash": string; }; "projectId": string; "block": { "number": string; "hash": string; "timestamp": string; }; "ledgerAmountAtomic": string; "observedCustodyAmountAtomic": string; "unallocatedCustodySurplusAtomic": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "committedQuoteValuation": string; "obligationIds": Array<string>; "disposition": "PROPOSED_MAPPING_REQUIRES_ADMISSION"; }>; "sourceBindings": { "ledger": Array<{ "recordId": string; "resourceVersion": string; "artifactHash": string; }>; "custody": Array<{ "evidenceId": string; "resourceVersion": string; }>; }; "sourceHash": string; "candidateHash": string; "ledgerConservation": { "scope": "SUPPLIED_IMMUTABLE_ENTRIES_ONLY"; "ledgerVersion": "treasury-ledger-v1" | "treasury-ledger-v2"; "conserved": true; "commitment": string; }; "omittedLedgerEntryIds": Array<string>; "omittedCustodyEvidenceIds": Array<string>; "limitations": Array<JsonValue>; "spendability": "NOT_ESTABLISHED"; "expenseCoverage": "UNKNOWN"; "financialAuthority": false; }; "createdBy": string; "createdAt": string; "recordedAt": string; "acknowledgment": { "recordedBy": string; "recordedAt": string; } | null; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }>; "nextCursor": string | null; };

export type TreasuryAssumptionsCreate = { "reconciliation": { "id": string; "resourceVersion": string; }; "ledgerEntryIds": Array<string>; "assumptions": { "title": string; "obligations": Array<{ "id": string; "economicKey": string; "label": string; "totalAmountAtomic": string; "installments": Array<{ "id": string; "dueDay": string; "amountAtomic": string; }>; }>; "conditionalInflows": Array<{ "id": string; "economicKey": string; "label": string; "expectedDay": string; "amountAtomic": string; "condition": string; }>; "allocations": Array<{ "id": string; "economicKey": string; "label": string; "day": string; "amountAtomic": string; }>; "ledgerObligationCoverage": Array<{ "ledgerObligationId": string; "relation": "SCHEDULED_HERE" | "DECLARED_ALREADY_DEDUCTED" | "UNRESOLVED"; "scheduleIds": Array<string>; "note": string; }>; "expenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; }; };

export type TreasuryAssumptionsRevision = { "assumptions": { "title": string; "obligations": Array<{ "id": string; "economicKey": string; "label": string; "totalAmountAtomic": string; "installments": Array<{ "id": string; "dueDay": string; "amountAtomic": string; }>; }>; "conditionalInflows": Array<{ "id": string; "economicKey": string; "label": string; "expectedDay": string; "amountAtomic": string; "condition": string; }>; "allocations": Array<{ "id": string; "economicKey": string; "label": string; "day": string; "amountAtomic": string; }>; "ledgerObligationCoverage": Array<{ "ledgerObligationId": string; "relation": "SCHEDULED_HERE" | "DECLARED_ALREADY_DEDUCTED" | "UNRESOLVED"; "scheduleIds": Array<string>; "note": string; }>; "expenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; }; };

export type TreasuryAssumptions = { "schemaVersion": "treasury-dated-assumptions-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "reconciliation": { "id": string; "resourceVersion": string; }; "ledgerEntryIds": Array<string>; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "assumptions": { "title": string; "obligations": Array<{ "id": string; "economicKey": string; "label": string; "totalAmountAtomic": string; "installments": Array<{ "id": string; "dueDay": string; "amountAtomic": string; }>; }>; "conditionalInflows": Array<{ "id": string; "economicKey": string; "label": string; "expectedDay": string; "amountAtomic": string; "condition": string; }>; "allocations": Array<{ "id": string; "economicKey": string; "label": string; "day": string; "amountAtomic": string; }>; "ledgerObligationCoverage": Array<{ "ledgerObligationId": string; "relation": "SCHEDULED_HERE" | "DECLARED_ALREADY_DEDUCTED" | "UNRESOLVED"; "scheduleIds": Array<string>; "note": string; }>; "expenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; }; "provenance": "ISSUER_DECLARED_UNVERIFIED"; "verifiedExpenseCoverage": "UNKNOWN"; "createdBy": string; "createdAt": string; "recordedBy": string; "recordedAt": string; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; };

export type TreasuryAssumptionsWrite = { "record": { "schemaVersion": "treasury-dated-assumptions-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "reconciliation": { "id": string; "resourceVersion": string; }; "ledgerEntryIds": Array<string>; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "assumptions": { "title": string; "obligations": Array<{ "id": string; "economicKey": string; "label": string; "totalAmountAtomic": string; "installments": Array<{ "id": string; "dueDay": string; "amountAtomic": string; }>; }>; "conditionalInflows": Array<{ "id": string; "economicKey": string; "label": string; "expectedDay": string; "amountAtomic": string; "condition": string; }>; "allocations": Array<{ "id": string; "economicKey": string; "label": string; "day": string; "amountAtomic": string; }>; "ledgerObligationCoverage": Array<{ "ledgerObligationId": string; "relation": "SCHEDULED_HERE" | "DECLARED_ALREADY_DEDUCTED" | "UNRESOLVED"; "scheduleIds": Array<string>; "note": string; }>; "expenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; }; "provenance": "ISSUER_DECLARED_UNVERIFIED"; "verifiedExpenseCoverage": "UNKNOWN"; "createdBy": string; "createdAt": string; "recordedBy": string; "recordedAt": string; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }; "replayed": boolean; };

export type TreasuryAssumptionsList = { "items": Array<{ "schemaVersion": "treasury-dated-assumptions-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "reconciliation": { "id": string; "resourceVersion": string; }; "ledgerEntryIds": Array<string>; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "assumptions": { "title": string; "obligations": Array<{ "id": string; "economicKey": string; "label": string; "totalAmountAtomic": string; "installments": Array<{ "id": string; "dueDay": string; "amountAtomic": string; }>; }>; "conditionalInflows": Array<{ "id": string; "economicKey": string; "label": string; "expectedDay": string; "amountAtomic": string; "condition": string; }>; "allocations": Array<{ "id": string; "economicKey": string; "label": string; "day": string; "amountAtomic": string; }>; "ledgerObligationCoverage": Array<{ "ledgerObligationId": string; "relation": "SCHEDULED_HERE" | "DECLARED_ALREADY_DEDUCTED" | "UNRESOLVED"; "scheduleIds": Array<string>; "note": string; }>; "expenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; }; "provenance": "ISSUER_DECLARED_UNVERIFIED"; "verifiedExpenseCoverage": "UNKNOWN"; "createdBy": string; "createdAt": string; "recordedBy": string; "recordedAt": string; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }>; "nextCursor": string | null; };

export type TreasuryAssumptionsHistory = { "items": Array<{ "schemaVersion": "treasury-dated-assumptions-v1"; "organizationId": string; "id": string; "sequence": string; "resourceVersion": string; "reconciliation": { "id": string; "resourceVersion": string; }; "ledgerEntryIds": Array<string>; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "assumptions": { "title": string; "obligations": Array<{ "id": string; "economicKey": string; "label": string; "totalAmountAtomic": string; "installments": Array<{ "id": string; "dueDay": string; "amountAtomic": string; }>; }>; "conditionalInflows": Array<{ "id": string; "economicKey": string; "label": string; "expectedDay": string; "amountAtomic": string; "condition": string; }>; "allocations": Array<{ "id": string; "economicKey": string; "label": string; "day": string; "amountAtomic": string; }>; "ledgerObligationCoverage": Array<{ "ledgerObligationId": string; "relation": "SCHEDULED_HERE" | "DECLARED_ALREADY_DEDUCTED" | "UNRESOLVED"; "scheduleIds": Array<string>; "note": string; }>; "expenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; }; "provenance": "ISSUER_DECLARED_UNVERIFIED"; "verifiedExpenseCoverage": "UNKNOWN"; "createdBy": string; "createdAt": string; "recordedBy": string; "recordedAt": string; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }>; "nextCursor": string | null; };

export type TreasuryProjectionCreate = { "assumptions": { "id": string; "resourceVersion": string; }; "throughDay": string; "restrictions": Array<{ "ledgerEntryId": string; "restrictedAmountAtomic": string; "reason": string; }>; "confirmation": "UNPAID_SCHEDULES_AND_RESTRICTIONS_EXCLUDE_THEM"; };

export type TreasuryProjection = { "schemaVersion": "treasury-declared-projection-v1"; "organizationId": string; "id": string; "resourceVersion": string; "request": { "assumptions": { "id": string; "resourceVersion": string; }; "throughDay": string; "restrictions": Array<{ "ledgerEntryId": string; "restrictedAmountAtomic": string; "reason": string; }>; "confirmation": "UNPAID_SCHEDULES_AND_RESTRICTIONS_EXCLUDE_THEM"; }; "result": { "schemaVersion": "treasury-snapshot-projection-model-v1"; "organizationId": string; "assumptions": { "id": string; "resourceVersion": string; }; "reconciliation": { "id": string; "resourceVersion": string; }; "request": { "assumptions": { "id": string; "resourceVersion": string; }; "throughDay": string; "restrictions": Array<{ "ledgerEntryId": string; "restrictedAmountAtomic": string; "reason": string; }>; "confirmation": "UNPAID_SCHEDULES_AND_RESTRICTIONS_EXCLUDE_THEM"; }; "sourceBlock": { "number": string; "hash": string; "timestamp": string; }; "sourceCutoff": string; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "openingDay": string; "throughDay": string; "opening": { "availableMappedAtomic": string; "declaredRestrictedAtomic": string; "scenarioBalanceAtomic": string; }; "selectedMappings": Array<{ "ledgerEntryId": string; "ledgerResourceVersion": string; "custodyEvidenceId": string; "custodyResourceVersion": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "ledgerAmountAtomic": string; "declaredRestrictedAtomic": string; "restrictionReason": string; "includedInOpening": boolean; "disposition": "AVAILABLE_DECLARED_SCENARIO" | "NON_AVAILABLE_EXCLUDED"; }>; "timeline": Array<{ "day": string; "actualInflowsAtomic": "0"; "obligationsAtomic": string; "allocationsAtomic": string; "conditionalInflowsAtomic": string; "closingBaselineAtomic": string; "cumulativeConditionalAtomic": string; "closingConditionalScenarioAtomic": string; }>; "excludedEvents": Array<{ "id": string; "kind": "OBLIGATION" | "ALLOCATION" | "CONDITIONAL_INFLOW"; "day": string; "amountAtomic": string; "reason": "AFTER_HORIZON"; }>; "firstShortfallDay": string | null; "minimumBaselineAtomic": string; "closingBaselineAtomic": string; "conditionalInflowsAtomic": string; "closingConditionalScenarioAtomic": string; "declaredExpenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; "provenance": "DECLARED_SCENARIO"; "verifiedExpenseCoverage": "UNKNOWN"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; "limitations": Array<"ISSUER_DECLARATIONS_ARE_NOT_VERIFIED_SPENDABILITY" | "EXPENSE_COMPLETENESS_REMAINS_UNKNOWN" | "SNAPSHOT_DAY_UNPAID_OUTFLOWS_ARE_INCLUDED" | "DAILY_BUCKETS_DO_NOT_ESTABLISH_INTRADAY_SOLVENCY" | "CONDITIONAL_INCOME_IS_NOT_SETTLED_CASH" | "UNALLOCATED_CUSTODY_SURPLUS_IS_EXCLUDED" | "NON_AVAILABLE_LEDGER_BALANCES_ARE_EXCLUDED" | "RESTRICTIONS_ARE_DECLARED_SEPARATELY_FROM_SCHEDULES" | "HISTORICAL_SOURCES_DO_NOT_ESTABLISH_CURRENT_APPLICABILITY">; "modelHash": string; }; "sourceHash": string; "createdBy": string; "createdAt": string; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; };

export type TreasuryProjectionWrite = { "record": { "schemaVersion": "treasury-declared-projection-v1"; "organizationId": string; "id": string; "resourceVersion": string; "request": { "assumptions": { "id": string; "resourceVersion": string; }; "throughDay": string; "restrictions": Array<{ "ledgerEntryId": string; "restrictedAmountAtomic": string; "reason": string; }>; "confirmation": "UNPAID_SCHEDULES_AND_RESTRICTIONS_EXCLUDE_THEM"; }; "result": { "schemaVersion": "treasury-snapshot-projection-model-v1"; "organizationId": string; "assumptions": { "id": string; "resourceVersion": string; }; "reconciliation": { "id": string; "resourceVersion": string; }; "request": { "assumptions": { "id": string; "resourceVersion": string; }; "throughDay": string; "restrictions": Array<{ "ledgerEntryId": string; "restrictedAmountAtomic": string; "reason": string; }>; "confirmation": "UNPAID_SCHEDULES_AND_RESTRICTIONS_EXCLUDE_THEM"; }; "sourceBlock": { "number": string; "hash": string; "timestamp": string; }; "sourceCutoff": string; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "openingDay": string; "throughDay": string; "opening": { "availableMappedAtomic": string; "declaredRestrictedAtomic": string; "scenarioBalanceAtomic": string; }; "selectedMappings": Array<{ "ledgerEntryId": string; "ledgerResourceVersion": string; "custodyEvidenceId": string; "custodyResourceVersion": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "ledgerAmountAtomic": string; "declaredRestrictedAtomic": string; "restrictionReason": string; "includedInOpening": boolean; "disposition": "AVAILABLE_DECLARED_SCENARIO" | "NON_AVAILABLE_EXCLUDED"; }>; "timeline": Array<{ "day": string; "actualInflowsAtomic": "0"; "obligationsAtomic": string; "allocationsAtomic": string; "conditionalInflowsAtomic": string; "closingBaselineAtomic": string; "cumulativeConditionalAtomic": string; "closingConditionalScenarioAtomic": string; }>; "excludedEvents": Array<{ "id": string; "kind": "OBLIGATION" | "ALLOCATION" | "CONDITIONAL_INFLOW"; "day": string; "amountAtomic": string; "reason": "AFTER_HORIZON"; }>; "firstShortfallDay": string | null; "minimumBaselineAtomic": string; "closingBaselineAtomic": string; "conditionalInflowsAtomic": string; "closingConditionalScenarioAtomic": string; "declaredExpenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; "provenance": "DECLARED_SCENARIO"; "verifiedExpenseCoverage": "UNKNOWN"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; "limitations": Array<"ISSUER_DECLARATIONS_ARE_NOT_VERIFIED_SPENDABILITY" | "EXPENSE_COMPLETENESS_REMAINS_UNKNOWN" | "SNAPSHOT_DAY_UNPAID_OUTFLOWS_ARE_INCLUDED" | "DAILY_BUCKETS_DO_NOT_ESTABLISH_INTRADAY_SOLVENCY" | "CONDITIONAL_INCOME_IS_NOT_SETTLED_CASH" | "UNALLOCATED_CUSTODY_SURPLUS_IS_EXCLUDED" | "NON_AVAILABLE_LEDGER_BALANCES_ARE_EXCLUDED" | "RESTRICTIONS_ARE_DECLARED_SEPARATELY_FROM_SCHEDULES" | "HISTORICAL_SOURCES_DO_NOT_ESTABLISH_CURRENT_APPLICABILITY">; "modelHash": string; }; "sourceHash": string; "createdBy": string; "createdAt": string; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }; "replayed": boolean; };

export type TreasuryProjectionList = { "items": Array<{ "schemaVersion": "treasury-declared-projection-v1"; "organizationId": string; "id": string; "resourceVersion": string; "request": { "assumptions": { "id": string; "resourceVersion": string; }; "throughDay": string; "restrictions": Array<{ "ledgerEntryId": string; "restrictedAmountAtomic": string; "reason": string; }>; "confirmation": "UNPAID_SCHEDULES_AND_RESTRICTIONS_EXCLUDE_THEM"; }; "result": { "schemaVersion": "treasury-snapshot-projection-model-v1"; "organizationId": string; "assumptions": { "id": string; "resourceVersion": string; }; "reconciliation": { "id": string; "resourceVersion": string; }; "request": { "assumptions": { "id": string; "resourceVersion": string; }; "throughDay": string; "restrictions": Array<{ "ledgerEntryId": string; "restrictedAmountAtomic": string; "reason": string; }>; "confirmation": "UNPAID_SCHEDULES_AND_RESTRICTIONS_EXCLUDE_THEM"; }; "sourceBlock": { "number": string; "hash": string; "timestamp": string; }; "sourceCutoff": string; "unit": { "chainId": number; "genesisHash": string; "asset": string; "decimals": number; }; "openingDay": string; "throughDay": string; "opening": { "availableMappedAtomic": string; "declaredRestrictedAtomic": string; "scenarioBalanceAtomic": string; }; "selectedMappings": Array<{ "ledgerEntryId": string; "ledgerResourceVersion": string; "custodyEvidenceId": string; "custodyResourceVersion": string; "ledgerState": "AVAILABLE" | "DEPLOYED" | "LOCKED" | "AT_RISK" | "FEE_GENERATING"; "ledgerAmountAtomic": string; "declaredRestrictedAtomic": string; "restrictionReason": string; "includedInOpening": boolean; "disposition": "AVAILABLE_DECLARED_SCENARIO" | "NON_AVAILABLE_EXCLUDED"; }>; "timeline": Array<{ "day": string; "actualInflowsAtomic": "0"; "obligationsAtomic": string; "allocationsAtomic": string; "conditionalInflowsAtomic": string; "closingBaselineAtomic": string; "cumulativeConditionalAtomic": string; "closingConditionalScenarioAtomic": string; }>; "excludedEvents": Array<{ "id": string; "kind": "OBLIGATION" | "ALLOCATION" | "CONDITIONAL_INFLOW"; "day": string; "amountAtomic": string; "reason": "AFTER_HORIZON"; }>; "firstShortfallDay": string | null; "minimumBaselineAtomic": string; "closingBaselineAtomic": string; "conditionalInflowsAtomic": string; "closingConditionalScenarioAtomic": string; "declaredExpenseCoverage": { "declaration": "DECLARED_COMPLETE" | "DECLARED_PARTIAL" | "UNKNOWN"; "omittedCategories": Array<string>; "note": string; }; "provenance": "DECLARED_SCENARIO"; "verifiedExpenseCoverage": "UNKNOWN"; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; "limitations": Array<"ISSUER_DECLARATIONS_ARE_NOT_VERIFIED_SPENDABILITY" | "EXPENSE_COMPLETENESS_REMAINS_UNKNOWN" | "SNAPSHOT_DAY_UNPAID_OUTFLOWS_ARE_INCLUDED" | "DAILY_BUCKETS_DO_NOT_ESTABLISH_INTRADAY_SOLVENCY" | "CONDITIONAL_INCOME_IS_NOT_SETTLED_CASH" | "UNALLOCATED_CUSTODY_SURPLUS_IS_EXCLUDED" | "NON_AVAILABLE_LEDGER_BALANCES_ARE_EXCLUDED" | "RESTRICTIONS_ARE_DECLARED_SEPARATELY_FROM_SCHEDULES" | "HISTORICAL_SOURCES_DO_NOT_ESTABLISH_CURRENT_APPLICABILITY">; "modelHash": string; }; "sourceHash": string; "createdBy": string; "createdAt": string; "spendability": "NOT_ESTABLISHED"; "financialAuthority": false; }>; "nextCursor": string | null; };

export type MarketDiscoveryProject = { "id": number; "name": string; "symbol": string; "chain": string; "address": string | null; "imageUrl": string | null; "url": string; };

export type MarketDiscoverySearch = { "projects": Array<MarketDiscoveryProject>; "page": number; "hasMore": boolean; };

export type MarketDiscoveryPool = { "id": string; "venue": string; "address": string; "quote": string; "priceUsd": number | null; "liquidityUsd": number | null; "volume24hUsd": number | null; "priceChange24hPercent": number | null; "buys24h": number | null; "sells24h": number | null; "url": string; };

export type WorkflowVaultSnapshot = { "id": string; "chainId": number; "capturedAt": string; "blockNumber": string; "blockHash": string; "tokenBalance": string; "quoteBalance": string; "deployedTokenBalance": string; "deployedQuoteBalance": string; "protectedQuoteReserve": string; "quoteSymbol": string; "positions": number; "paused": boolean | null; };

export type WorkflowVaultContext = { "vaultId": string; "name": string; "lifecycle": string; "mode": string; "projectToken": string; "quoteToken": string; "snapshot": WorkflowVaultSnapshot | null; "limitation": string; };

export type MarketDiscoveryEvidence = { "project": MarketDiscoveryProject; "retrievedAt": string; "pools": Array<MarketDiscoveryPool>; "metrics": { "priceUsd": number | null; "liquidityUsd": number | null; "volume24hUsd": number | null; "priceChange24hPercent": number | null; "largestPoolSharePercent": number | null; }; "sources": Array<{ "id": string; "label": string; "url": string; }>; "gaps": Array<string>; "workspace"?: WorkflowVaultContext; };

export type MarketDiscoveryCapabilities = { "model": string; "configured": boolean; "access": "AUTHENTICATED_WORKSPACE"; "execution": "READ_ONLY"; };

export type WorkflowContext = { "vaults": Array<{ "id": string; "name": string; }>; "available": boolean; "persistence": boolean; };

export type WorkflowResearchRequest = { "vaultId"?: string; "projectId": number; "question": string; "history"?: Array<{ "question": string; "answer": string; }>; };

export type WorkflowResearchAnswer = { "headline": string; "explanation": string; "findings": Array<{ "title": string; "detail": string; "sourceIds": Array<string>; }>; "nextSteps": Array<{ "title": string; "reason": string; }>; "unknowns": Array<string>; "followUps": Array<string>; };

export type WorkflowResearchResult = { "id": string; "question": string; "evidence": MarketDiscoveryEvidence; "answer": WorkflowResearchAnswer; "completedAt": string; "execution": "READ_ONLY"; };

export type WorkflowResearchResponse = { "id": string; "question": string; "evidence": MarketDiscoveryEvidence; "answer": WorkflowResearchAnswer; "completedAt": string; "execution": "READ_ONLY"; "persistence": "SAVED" | "SESSION"; };

export type CompletedWorkflowSummary = { "organizationId": string; "requesterId": string; "id": string; "vaultId": string | null; "projectId": number; "projectName": string; "question": string; "headline": string; "completedAt": string; "savedAt": string; "contentHash": Hash; };

export type CompletedWorkflowRun = { "organizationId": string; "requesterId": string; "id": string; "vaultId": string | null; "projectId": number; "projectName": string; "question": string; "headline": string; "completedAt": string; "savedAt": string; "contentHash": Hash; "result": WorkflowResearchResult; };

export type CompletedWorkflowPage = { "runs": Array<CompletedWorkflowSummary>; "nextCursor": string | null; };

export type SavedVirtualsProject = { "kind": "VIRTUALS_DIRECTORY_PROJECT"; "organizationId": string; "virtualsProjectId": number; "project": { "id": number; "name": string; "symbol": string; "chain": string; "address": string | null; "imageUrl": string | null; "url": string; }; "directoryObservedAt": string; "savedAt": string; "savedBy": string; "resourceVersion": Hash; };

export type SavedVirtualsProjectPage = { "projects": Array<SavedVirtualsProject>; "nextCursor": string | null; };

export type SaveVirtualsProjectRequest = { "virtualsProjectId": number; };

export type SaveVirtualsProjectReceipt = { "project": SavedVirtualsProject; "replayed": boolean; };

export type RemoveVirtualsProjectRequest = { "expectedResourceVersion": Hash; };

export type RemoveVirtualsProjectReceipt = { "virtualsProjectId": number; "resourceVersion": Hash; "removedAt": string; "replayed": boolean; };

export type TreasuryLedgerVersionPage = { "items": Array<{ "id": string; "organizationId": string; "recordType": OperatingSystemRecordType; "version": number; "status": OperatingSystemRecordStatus; "payload": TreasuryBucket; "artifactHash": Hash; "evidenceHashes": Array<Hash>; "createdBy": string; "reason": string; "requestId": string; "createdAt": string; "updatedAt": string; "supersedesVersion"?: number; "resourceVersion": Hash; }>; "nextCursor": string | null; };

export type ProposalReviewDecisionEvent = { "organizationId": string; "eventId": string; "recordType": "PROPOSAL_WORKSPACE"; "recordId": string; "eventKind": "PROPOSAL_INTERNAL_DECISION"; "payload": { "actorId": string; "actorRole": string; "decidedAt": string; "proposalPacketHash": Hash; "decision": "APPROVE"; "evidenceHash": Hash; } | { "actorId": string; "actorRole": string; "decidedAt": string; "proposalPacketHash": Hash; "decision": "REJECT"; "rejectionReason": string; "evidenceHash"?: Hash; }; "artifactHash": Hash; "createdBy": string; "actorRole": string; "reason": string; "requestId": string; "createdAt": string; };

export type ProposalReviewCommentEvent = { "organizationId": string; "eventId": string; "recordType": "PROPOSAL_WORKSPACE"; "recordId": string; "eventKind": "COMMENT_APPENDED"; "payload": { "id": string; "proposalWorkspaceId": string; "authorId": string; "body": string; "mentions": Array<string>; "supersedesCommentId"?: string; "supersedesCommentArtifactHash"?: Hash; }; "artifactHash": Hash; "createdBy": string; "actorRole": string; "reason": string; "requestId": string; "createdAt": string; };

export type ProposalReviewSafeSubmissionEvent = { "organizationId": string; "eventId": string; "recordType": "PROPOSAL_WORKSPACE"; "recordId": string; "eventKind": "PROPOSAL_SAFE_SUBMISSION_VERIFIED"; "payload": { "schemaVersion": "proposal-safe-submission-evidence-v1"; "proposalId": string; "proposalPacketHash": Hash; "chainId": 677 | 968; "safeAddress": Address; "target": Address; "value": "0"; "operation": 0; "calldata": string; "calldataHash": Hash; "decodedControllerExecution": ControllerExecutionBindingV2; "decodedControllerExecutionHash": Hash; "transactionHash": Hash; "safeTransactionHash": Hash; "finalizedBlockNumber": string; "finalizedBlockHash": Hash; "finalizedAt": string; "finalityDepth": number; "receiptStatus": 1; "executionResult": { "schemaVersion": "canonical-evm-execution-result-v1"; "executionSucceeded": true; "returnDataHash": Hash; "logsHash": Hash; "stateDeltaHash": Hash; }; "executionResultHash": Hash; "finalityEvidenceHash": Hash; "reconciliationBlockNumber": string; "reconciliationBlockHash": Hash; "reconciledAt": string; "reconciliationStatus": "MATCHED"; "reconciliationEvidenceHash": Hash; "safeVerificationId": string; "safeVerificationEvidenceHash": Hash; "signedReleaseDigest"?: Hash; "vaultId": string; "vaultDeploymentProvenanceHash": Hash; "vaultDeploymentBlockHash": Hash; "venueId": string; "venueResourceVersion": Hash; "venueArtifactHash": Hash; "callerSuppliedTransactionHashAccepted": false; "executionPerformedByRoute": false; "checkedAt": string; }; "artifactHash": Hash; "createdBy": string; "actorRole": string; "reason": string; "requestId": string; "createdAt": string; };

export type ProposalWorkspaceReview = { "schemaVersion": "proposal-review-view-v1"; "proposal": { "id": string; "organizationId": string; "recordType": OperatingSystemRecordType; "version": number; "status": OperatingSystemRecordStatus; "payload": ProposalWorkspace; "artifactHash": Hash; "evidenceHashes": Array<Hash>; "createdBy": string; "reason": string; "requestId": string; "createdAt": string; "updatedAt": string; "supersedesVersion"?: number; "resourceVersion": Hash; }; "proposalPacketHash": Hash; "reviewEvidenceHash": Hash; "observedAt": string; "approvals": Array<{ "actorId": string; "decidedAt": string; "evidenceHash": Hash; }>; "approvalProgress": { "approved": number; "required": number; }; "decisions": Array<ProposalReviewDecisionEvent>; "comments": Array<ProposalReviewCommentEvent>; "safeSubmissions": Array<ProposalReviewSafeSubmissionEvent>; "viewer": { "actorId": string; "role": string; "hasApproved": boolean; "mayComment": boolean; "mayApprove": boolean; "mayReject": boolean; }; "executionAuthorityGranted": false; };

export type WorkflowRequestError = { "error": { "message": string; }; };

export type WorkflowRateLimitError = { "error": { "code": "RATE_LIMITED"; "message": string; "retryable": true; "retryAfterSeconds": number; }; };

export type GetResearchPlanningPath = { "runId": string; };
export type GetResearchPlanningResult = { "data": ResearchPlanningState; };
export interface GetResearchPlanningInput { path: GetResearchPlanningPath; signal?: AbortSignal; }

export type GetResearchProgressPath = { "runId": string; };
export type GetResearchProgressResult = { "data": ResearchProgress; };
export interface GetResearchProgressInput { path: GetResearchProgressPath; signal?: AbortSignal; }

export type GetResearchTrialInputPath = { "runId": string; "trialKey": "baseline" | "alternative-1" | "alternative-2" | "alternative-3"; };
export type GetResearchTrialInputResult = { "data": ResearchTrialInput; };
export interface GetResearchTrialInputInput { path: GetResearchTrialInputPath; signal?: AbortSignal; }

export type GetAgentRunResultPath = { "runId": string; };
export type GetAgentRunResultResult = { "data": AgentRunResult; };
export interface GetAgentRunResultInput { path: GetAgentRunResultPath; signal?: AbortSignal; }

export type GetAgentRunEvidencePath = { "runId": string; "evidenceId": string; };
export type GetAgentRunEvidenceResult = { "data": CapturedHealthEvidenceView; };
export interface GetAgentRunEvidenceInput { path: GetAgentRunEvidencePath; signal?: AbortSignal; }

export type ApplyAgentRunCommandPath = { "runId": string; };
export type ApplyAgentRunCommandBody = AgentControlCommand;
export type ApplyAgentRunCommandResult = { "data": AgentControlReceipt; };
export interface ApplyAgentRunCommandInput { path: ApplyAgentRunCommandPath; body: ApplyAgentRunCommandBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type StartHealthAgentRunBody = AgentAdmissionRequest;
export type StartHealthAgentRunResult = { "data": AgentAdmissionReceipt; };
export interface StartHealthAgentRunInput { body: StartHealthAgentRunBody; idempotencyKey: string; signal?: AbortSignal; }

export type ListAgentRunsQuery = { "limit"?: number; "cursor"?: string; "kind"?: "HEALTH_INVESTIGATION" | "PROPOSAL_REVIEW" | "WHAT_IF_RESEARCH"; "state"?: "QUEUED" | "RUNNING" | "WAITING_FOR_INPUT" | "WAITING_FOR_CHILDREN" | "COMPLETED" | "PARTIAL" | "ABSTAINED" | "FAILED" | "CANCELLED"; "subjectRecordType"?: "VAULT" | "PROPOSAL" | "PROPOSAL_WORKSPACE" | "ISSUER_INTENT" | "SAVED_PUBLIC_PROJECT" | "DECISION_PACK"; "subjectRecordId"?: string; };
export type ListAgentRunsResult = { "data": AgentRunList; };
export interface ListAgentRunsInput { query?: ListAgentRunsQuery; signal?: AbortSignal; }

export type GetAgentRunPath = { "runId": string; };
export type GetAgentRunResult = { "data": AgentRunDetail; };
export interface GetAgentRunInput { path: GetAgentRunPath; signal?: AbortSignal; }

export type ListAgentRunEventsPath = { "runId": string; };
export type ListAgentRunEventsQuery = { "after"?: string; "limit"?: number; };
export type ListAgentRunEventsResult = { "data": AgentActivityPage; };
export interface ListAgentRunEventsInput { path: ListAgentRunEventsPath; query?: ListAgentRunEventsQuery; signal?: AbortSignal; }

export type ResolvePublicProjectBody = PublicProjectResolveRequest;
export type ResolvePublicProjectResult = { "data": PublicProjectAnalysis; };
export interface ResolvePublicProjectInput { body: ResolvePublicProjectBody; signal?: AbortSignal; }

export type InvestigatePublicProjectLiquidityBody = PublicLiquidityInvestigationRequest;
export type InvestigatePublicProjectLiquidityResult = { "data": PublicLiquidityInvestigation; };
export interface InvestigatePublicProjectLiquidityInput { body: InvestigatePublicProjectLiquidityBody; signal?: AbortSignal; }

export type ListSavedProjectsQuery = { "limit"?: number; "cursor"?: string; };
export type ListSavedProjectsResult = { "data": SavedProjectList; };
export interface ListSavedProjectsInput { query?: ListSavedProjectsQuery; signal?: AbortSignal; }

export type SavePublicProjectBody = PublicProjectResolveRequest;
export type SavePublicProjectResult = { "data": SavedProjectWriteReceipt; };
export interface SavePublicProjectInput { body: SavePublicProjectBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetSavedProjectPath = { "projectId": string; };
export type GetSavedProjectResult = { "data": SavedPublicProject; };
export interface GetSavedProjectInput { path: GetSavedProjectPath; signal?: AbortSignal; }

export type RefreshSavedProjectPath = { "projectId": string; };
export type RefreshSavedProjectBody = Record<string, never>;
export type RefreshSavedProjectResult = { "data": SavedProjectWriteReceipt; };
export interface RefreshSavedProjectInput { path: RefreshSavedProjectPath; body: RefreshSavedProjectBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListSavedProjectObservationsPath = { "projectId": string; };
export type ListSavedProjectObservationsQuery = { "limit"?: number; "cursor"?: string; };
export type ListSavedProjectObservationsResult = { "data": SavedProjectObservationList; };
export interface ListSavedProjectObservationsInput { path: ListSavedProjectObservationsPath; query?: ListSavedProjectObservationsQuery; signal?: AbortSignal; }

export type GetSavedProjectObservationPath = { "projectId": string; "version": string; };
export type GetSavedProjectObservationResult = { "data": SavedProjectObservation; };
export interface GetSavedProjectObservationInput { path: GetSavedProjectObservationPath; signal?: AbortSignal; }

export type ListWorkspacePlansResult = { "data": WorkspacePlanCatalog; };
export interface ListWorkspacePlansInput { signal?: AbortSignal; }

export type GetPublicAcpOfferingResult = { "data": AcpOfferingPreview; };
export interface GetPublicAcpOfferingInput { signal?: AbortSignal; }

export type CreateTreasuryDecisionPackBody = CreateTreasuryDecisionPack;
export type CreateTreasuryDecisionPackResult = { "data": DecisionPackWriteReceipt; };
export interface CreateTreasuryDecisionPackInput { body: CreateTreasuryDecisionPackBody; idempotencyKey: string; signal?: AbortSignal; }

export type CreateResearchDecisionPackBody = CreateResearchDecisionPack;
export type CreateResearchDecisionPackResult = { "data": DecisionPackWriteReceipt; };
export interface CreateResearchDecisionPackInput { body: CreateResearchDecisionPackBody; idempotencyKey: string; signal?: AbortSignal; }

export type ListDecisionPacksQuery = { "cursor"?: string; "limit"?: number; };
export type ListDecisionPacksResult = { "data": DecisionPackList; };
export interface ListDecisionPacksInput { query?: ListDecisionPacksQuery; signal?: AbortSignal; }

export type CreateDecisionPackBody = CreateDecisionPack;
export type CreateDecisionPackResult = { "data": DecisionPackWriteReceipt; };
export interface CreateDecisionPackInput { body: CreateDecisionPackBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetDecisionPackPath = { "packId": string; };
export type GetDecisionPackResult = { "data": DecisionPack; };
export interface GetDecisionPackInput { path: GetDecisionPackPath; signal?: AbortSignal; }

export type ListDecisionPackVersionsPath = { "packId": string; };
export type ListDecisionPackVersionsQuery = { "cursor"?: string; "limit"?: number; };
export type ListDecisionPackVersionsResult = { "data": DecisionPackHistory; };
export interface ListDecisionPackVersionsInput { path: ListDecisionPackVersionsPath; query?: ListDecisionPackVersionsQuery; signal?: AbortSignal; }

export type GetDecisionPackVersionPath = { "packId": string; "sequence": string; };
export type GetDecisionPackVersionResult = { "data": DecisionPack; };
export interface GetDecisionPackVersionInput { path: GetDecisionPackVersionPath; signal?: AbortSignal; }

export type ApplyDecisionPackCommandPath = { "packId": string; };
export type ApplyDecisionPackCommandBody = DecisionPackCommand;
export type ApplyDecisionPackCommandResult = { "data": DecisionPackWriteReceipt; };
export interface ApplyDecisionPackCommandInput { path: ApplyDecisionPackCommandPath; body: ApplyDecisionPackCommandBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListTreasuryCustodyEvidenceQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryCustodyEvidenceResult = { "data": TreasuryEvidenceList; };
export interface ListTreasuryCustodyEvidenceInput { query?: ListTreasuryCustodyEvidenceQuery; signal?: AbortSignal; }

export type AdmitTreasuryCustodyEvidenceBody = SignedTreasuryEvidence;
export type AdmitTreasuryCustodyEvidenceResult = { "data": TreasuryEvidenceWrite; };
export interface AdmitTreasuryCustodyEvidenceInput { body: AdmitTreasuryCustodyEvidenceBody; signal?: AbortSignal; }

export type GetTreasuryCustodyEvidencePath = { "evidenceId": string; };
export type GetTreasuryCustodyEvidenceResult = { "data": PersistedTreasuryEvidence; };
export interface GetTreasuryCustodyEvidenceInput { path: GetTreasuryCustodyEvidencePath; signal?: AbortSignal; }

export type IssueProjectControlChallengeBody = ProjectControlIssue;
export type IssueProjectControlChallengeResult = { "data": ProjectControlChallengeWrite; };
export interface IssueProjectControlChallengeInput { body: IssueProjectControlChallengeBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetProjectControlChallengePath = { "nonce": string; };
export type GetProjectControlChallengeResult = { "data": PersistedProjectControlChallenge; };
export interface GetProjectControlChallengeInput { path: GetProjectControlChallengePath; signal?: AbortSignal; }

export type AcceptProjectControlProofBody = ProjectControlProof;
export type AcceptProjectControlProofResult = { "data": ProjectControlAcceptance; };
export interface AcceptProjectControlProofInput { body: AcceptProjectControlProofBody; signal?: AbortSignal; }

export type PreviewTreasuryReconciliationBody = TreasuryReconciliationPreviewRequest;
export type PreviewTreasuryReconciliationResult = { "data": TreasuryLedgerReconciliation; };
export interface PreviewTreasuryReconciliationInput { body: PreviewTreasuryReconciliationBody; signal?: AbortSignal; }

export type ListTreasuryReconciliationsQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryReconciliationsResult = { "data": TreasuryReconciliationList; };
export interface ListTreasuryReconciliationsInput { query?: ListTreasuryReconciliationsQuery; signal?: AbortSignal; }

export type CreateTreasuryReconciliationBody = TreasuryReconciliationPreviewRequest;
export type CreateTreasuryReconciliationResult = { "data": TreasuryReconciliationWrite; };
export interface CreateTreasuryReconciliationInput { body: CreateTreasuryReconciliationBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetTreasuryReconciliationPath = { "id": string; };
export type GetTreasuryReconciliationResult = { "data": SavedTreasuryReconciliation; };
export interface GetTreasuryReconciliationInput { path: GetTreasuryReconciliationPath; signal?: AbortSignal; }

export type ListTreasuryReconciliationVersionsPath = { "id": string; };
export type ListTreasuryReconciliationVersionsQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryReconciliationVersionsResult = { "data": TreasuryReconciliationHistory; };
export interface ListTreasuryReconciliationVersionsInput { path: ListTreasuryReconciliationVersionsPath; query?: ListTreasuryReconciliationVersionsQuery; signal?: AbortSignal; }

export type GetTreasuryReconciliationVersionPath = { "id": string; "sequence": string; };
export type GetTreasuryReconciliationVersionResult = { "data": SavedTreasuryReconciliation; };
export interface GetTreasuryReconciliationVersionInput { path: GetTreasuryReconciliationVersionPath; signal?: AbortSignal; }

export type AcknowledgeTreasuryReconciliationPath = { "id": string; };
export type AcknowledgeTreasuryReconciliationBody = { "confirmation": "CONFIRM_LEDGER_CUSTODY_MAPPING"; };
export type AcknowledgeTreasuryReconciliationResult = { "data": TreasuryReconciliationWrite; };
export interface AcknowledgeTreasuryReconciliationInput { path: AcknowledgeTreasuryReconciliationPath; body: AcknowledgeTreasuryReconciliationBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListTreasuryAssumptionsQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryAssumptionsResult = { "data": TreasuryAssumptionsList; };
export interface ListTreasuryAssumptionsInput { query?: ListTreasuryAssumptionsQuery; signal?: AbortSignal; }

export type CreateTreasuryAssumptionsBody = TreasuryAssumptionsCreate;
export type CreateTreasuryAssumptionsResult = { "data": TreasuryAssumptionsWrite; };
export interface CreateTreasuryAssumptionsInput { body: CreateTreasuryAssumptionsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetTreasuryAssumptionsPath = { "id": string; };
export type GetTreasuryAssumptionsResult = { "data": TreasuryAssumptions; };
export interface GetTreasuryAssumptionsInput { path: GetTreasuryAssumptionsPath; signal?: AbortSignal; }

export type ListTreasuryAssumptionsVersionsPath = { "id": string; };
export type ListTreasuryAssumptionsVersionsQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryAssumptionsVersionsResult = { "data": TreasuryAssumptionsHistory; };
export interface ListTreasuryAssumptionsVersionsInput { path: ListTreasuryAssumptionsVersionsPath; query?: ListTreasuryAssumptionsVersionsQuery; signal?: AbortSignal; }

export type GetTreasuryAssumptionsVersionPath = { "id": string; "sequence": string; };
export type GetTreasuryAssumptionsVersionResult = { "data": TreasuryAssumptions; };
export interface GetTreasuryAssumptionsVersionInput { path: GetTreasuryAssumptionsVersionPath; signal?: AbortSignal; }

export type ReviseTreasuryAssumptionsPath = { "id": string; };
export type ReviseTreasuryAssumptionsBody = TreasuryAssumptionsRevision;
export type ReviseTreasuryAssumptionsResult = { "data": TreasuryAssumptionsWrite; };
export interface ReviseTreasuryAssumptionsInput { path: ReviseTreasuryAssumptionsPath; body: ReviseTreasuryAssumptionsBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListTreasuryProjectionsQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryProjectionsResult = { "data": TreasuryProjectionList; };
export interface ListTreasuryProjectionsInput { query?: ListTreasuryProjectionsQuery; signal?: AbortSignal; }

export type CreateTreasuryProjectionBody = TreasuryProjectionCreate;
export type CreateTreasuryProjectionResult = { "data": TreasuryProjectionWrite; };
export interface CreateTreasuryProjectionInput { body: CreateTreasuryProjectionBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetTreasuryProjectionPath = { "id": string; };
export type GetTreasuryProjectionResult = { "data": TreasuryProjection; };
export interface GetTreasuryProjectionInput { path: GetTreasuryProjectionPath; signal?: AbortSignal; }

export type SearchDiscoveredProjectsQuery = { "q": string; "page"?: number; };
export type SearchDiscoveredProjectsResult = { "data": MarketDiscoverySearch; };
export interface SearchDiscoveredProjectsInput { query: SearchDiscoveredProjectsQuery; signal?: AbortSignal; }

export type GetDiscoveredProjectMarketPath = { "id": number; };
export type GetDiscoveredProjectMarketResult = { "data": MarketDiscoveryEvidence; };
export interface GetDiscoveredProjectMarketInput { path: GetDiscoveredProjectMarketPath; signal?: AbortSignal; }

export type GetMarketDiscoveryCapabilitiesResult = { "data": MarketDiscoveryCapabilities; };
export interface GetMarketDiscoveryCapabilitiesInput { signal?: AbortSignal; }

export type GetWorkflowContextResult = { "data": WorkflowContext; };
export interface GetWorkflowContextInput { signal?: AbortSignal; }

export type ListCompletedWorkflowRunsQuery = { "cursor"?: string; "limit"?: number; };
export type ListCompletedWorkflowRunsResult = { "data": CompletedWorkflowPage; };
export interface ListCompletedWorkflowRunsInput { query?: ListCompletedWorkflowRunsQuery; signal?: AbortSignal; }

export type GetCompletedWorkflowRunPath = { "id": string; };
export type GetCompletedWorkflowRunResult = { "data": CompletedWorkflowRun; };
export interface GetCompletedWorkflowRunInput { path: GetCompletedWorkflowRunPath; signal?: AbortSignal; }

export type RunWorkflowResearchBody = WorkflowResearchRequest;
export type RunWorkflowResearchResult = { "data": WorkflowResearchResponse; };
export interface RunWorkflowResearchInput { body: RunWorkflowResearchBody; signal?: AbortSignal; }

export type ListSavedVirtualsProjectsQuery = { "cursor"?: string; "limit"?: number; };
export type ListSavedVirtualsProjectsResult = { "data": SavedVirtualsProjectPage; };
export interface ListSavedVirtualsProjectsInput { query?: ListSavedVirtualsProjectsQuery; signal?: AbortSignal; }

export type SaveVirtualsProjectBody = SaveVirtualsProjectRequest;
export type SaveVirtualsProjectResult = { "data": SaveVirtualsProjectReceipt; };
export interface SaveVirtualsProjectInput { body: SaveVirtualsProjectBody; signal?: AbortSignal; }

export type GetSavedVirtualsProjectPath = { "id": number; };
export type GetSavedVirtualsProjectResult = { "data": SavedVirtualsProject; };
export interface GetSavedVirtualsProjectInput { path: GetSavedVirtualsProjectPath; signal?: AbortSignal; }

export type RemoveSavedVirtualsProjectPath = { "id": number; };
export type RemoveSavedVirtualsProjectBody = RemoveVirtualsProjectRequest;
export type RemoveSavedVirtualsProjectResult = { "data": RemoveVirtualsProjectReceipt; };
export interface RemoveSavedVirtualsProjectInput { path: RemoveSavedVirtualsProjectPath; body: RemoveSavedVirtualsProjectBody; signal?: AbortSignal; }

export type ListTreasuryLedgerEntryVersionsPath = { "id": string; };
export type ListTreasuryLedgerEntryVersionsQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryLedgerEntryVersionsResult = { "data": TreasuryLedgerVersionPage; };
export interface ListTreasuryLedgerEntryVersionsInput { path: ListTreasuryLedgerEntryVersionsPath; query?: ListTreasuryLedgerEntryVersionsQuery; signal?: AbortSignal; }

export type GetProposalWorkspaceReviewPath = { "id": string; };
export type GetProposalWorkspaceReviewQuery = { "resourceVersion": Hash; };
export type GetProposalWorkspaceReviewResult = { "data": ProposalWorkspaceReview; };
export interface GetProposalWorkspaceReviewInput { path: GetProposalWorkspaceReviewPath; query: GetProposalWorkspaceReviewQuery; signal?: AbortSignal; }

export type ListIntentsQuery = { "cursor"?: string; "limit"?: number; };
export type ListIntentsResult = { "data": Array<RecordEnvelope & { "payload": IssuerIntent; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListIntentsInput { query?: ListIntentsQuery; signal?: AbortSignal; }

export type CreateIntentsBody = { "payload": IssuerIntent; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateIntentsResult = { "data": { "intent": RecordEnvelope & { "payload": IssuerIntent; [key: string]: JsonValue | undefined; }; "capitalRequirement": RecordEnvelope & { "payload": CapitalRequirementStudy; [key: string]: JsonValue | undefined; }; }; };
export interface CreateIntentsInput { body: CreateIntentsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetIntentsPath = { "id": string; };
export type GetIntentsResult = { "data": RecordEnvelope & { "payload": IssuerIntent; [key: string]: JsonValue | undefined; }; };
export interface GetIntentsInput { path: GetIntentsPath; signal?: AbortSignal; }

export type SupersedeIntentsPath = { "id": string; };
export type SupersedeIntentsBody = { "payload"?: IssuerIntent; "status"?: "DRAFT" | "VALIDATED" | "PAUSED" | "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeIntentsResult = { "data": { "intent": RecordEnvelope & { "payload": IssuerIntent; [key: string]: JsonValue | undefined; }; "capitalRequirement": RecordEnvelope & { "payload": CapitalRequirementStudy; [key: string]: JsonValue | undefined; }; "validationEvidence": OperatingSystemEvent; }; };
export interface SupersedeIntentsInput { path: SupersedeIntentsPath; body: SupersedeIntentsBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListStudiesQuery = { "cursor"?: string; "limit"?: number; };
export type ListStudiesResult = { "data": Array<RecordEnvelope & { "payload": SimulationStudy; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListStudiesInput { query?: ListStudiesQuery; signal?: AbortSignal; }

export type CreateStudiesBody = SimulationStudyRequest;
export type CreateStudiesResult = { "data": RecordEnvelope & { "payload": SimulationStudy; [key: string]: JsonValue | undefined; } | { "study": RecordEnvelope & { "payload": SimulationStudy; [key: string]: JsonValue | undefined; }; "job": OperatingSystemJob; "interactive": false; "signedReportPending": true; }; };
export interface CreateStudiesInput { body: CreateStudiesBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetStudiesPath = { "id": string; };
export type GetStudiesResult = { "data": RecordEnvelope & { "payload": SimulationStudy; [key: string]: JsonValue | undefined; }; };
export interface GetStudiesInput { path: GetStudiesPath; signal?: AbortSignal; }

export type ListStudySharesQuery = { "cursor"?: string; "limit"?: number; };
export type ListStudySharesResult = { "data": Array<RecordEnvelope & { "payload": StudyShare; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListStudySharesInput { query?: ListStudySharesQuery; signal?: AbortSignal; }

export type GetStudySharesPath = { "id": string; };
export type GetStudySharesResult = { "data": RecordEnvelope & { "payload": StudyShare; [key: string]: JsonValue | undefined; }; };
export interface GetStudySharesInput { path: GetStudySharesPath; signal?: AbortSignal; }

export type ListStrategiesQuery = { "cursor"?: string; "limit"?: number; };
export type ListStrategiesResult = { "data": Array<RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListStrategiesInput { query?: ListStrategiesQuery; signal?: AbortSignal; }

export type CreateStrategiesBody = { "payload": StrategyDefinitionV2Input; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateStrategiesResult = { "data": { "strategy": RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }; "compilation": StrategyCompilation; }; };
export interface CreateStrategiesInput { body: CreateStrategiesBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetStrategiesPath = { "id": string; };
export type GetStrategiesResult = { "data": RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }; };
export interface GetStrategiesInput { path: GetStrategiesPath; signal?: AbortSignal; }

export type SupersedeStrategiesPath = { "id": string; };
export type SupersedeStrategiesBody = { "payload"?: StrategyDefinitionV2Input; "status"?: "DRAFT" | "VALIDATED" | "PAUSED" | "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeStrategiesResult = { "data": { "strategy": RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }; "compilation": StrategyCompilation; "compilationEvidence": OperatingSystemEvent; }; };
export interface SupersedeStrategiesInput { path: SupersedeStrategiesPath; body: SupersedeStrategiesBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListProposalsQuery = { "cursor"?: string; "limit"?: number; };
export type ListProposalsResult = { "data": Array<RecordEnvelope & { "payload": ProposalWorkspace; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListProposalsInput { query?: ListProposalsQuery; signal?: AbortSignal; }

export type CreateProposalsBody = { "payload": ProposalWorkspaceInput; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateProposalsResult = { "data": RecordEnvelope & { "payload": ProposalWorkspace; [key: string]: JsonValue | undefined; }; };
export interface CreateProposalsInput { body: CreateProposalsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetProposalsPath = { "id": string; };
export type GetProposalsResult = { "data": RecordEnvelope & { "payload": ProposalWorkspace; [key: string]: JsonValue | undefined; }; };
export interface GetProposalsInput { path: GetProposalsPath; signal?: AbortSignal; }

export type ListLaunchPlansQuery = { "cursor"?: string; "limit"?: number; };
export type ListLaunchPlansResult = { "data": Array<RecordEnvelope & { "payload": LaunchPlan; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListLaunchPlansInput { query?: ListLaunchPlansQuery; signal?: AbortSignal; }

export type CreateLaunchPlansBody = LaunchPlanRequest;
export type CreateLaunchPlansResult = { "data": RecordEnvelope & { "payload": LaunchPlan; [key: string]: JsonValue | undefined; }; };
export interface CreateLaunchPlansInput { body: CreateLaunchPlansBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetLaunchPlansPath = { "id": string; };
export type GetLaunchPlansResult = { "data": RecordEnvelope & { "payload": LaunchPlan; [key: string]: JsonValue | undefined; }; };
export interface GetLaunchPlansInput { path: GetLaunchPlansPath; signal?: AbortSignal; }

export type ListUnlockImpactsQuery = { "cursor"?: string; "limit"?: number; };
export type ListUnlockImpactsResult = { "data": Array<RecordEnvelope & { "payload": UnlockImpact; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListUnlockImpactsInput { query?: ListUnlockImpactsQuery; signal?: AbortSignal; }

export type CreateUnlockImpactsBody = UnlockImpactRequest;
export type CreateUnlockImpactsResult = { "data": { "id": string; "organizationId": string; "recordType": OperatingSystemRecordType; "version": number; "status": OperatingSystemRecordStatus; "payload": UnlockImpact; "artifactHash": Hash; "evidenceHashes": Array<Hash>; "createdBy": string; "reason": string; "requestId": string; "createdAt": string; "updatedAt": string; "supersedesVersion"?: number; "resourceVersion": Hash; "downstream": { "events": Array<OperatingSystemEvent>; "jobs": Array<OperatingSystemJob>; }; }; };
export interface CreateUnlockImpactsInput { body: CreateUnlockImpactsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetUnlockImpactsPath = { "id": string; };
export type GetUnlockImpactsResult = { "data": RecordEnvelope & { "payload": UnlockImpact; [key: string]: JsonValue | undefined; }; };
export interface GetUnlockImpactsInput { path: GetUnlockImpactsPath; signal?: AbortSignal; }

export type ListScoresQuery = { "cursor"?: string; "limit"?: number; };
export type ListScoresResult = { "data": Array<RecordEnvelope & { "payload": MarketQualityScore; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListScoresInput { query?: ListScoresQuery; signal?: AbortSignal; }

export type CreateScoresBody = MarketQualityRequest;
export type CreateScoresResult = { "data": RecordEnvelope & { "payload": MarketQualityScore; [key: string]: JsonValue | undefined; }; };
export interface CreateScoresInput { body: CreateScoresBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetScoresPath = { "id": string; };
export type GetScoresResult = { "data": RecordEnvelope & { "payload": MarketQualityScore; [key: string]: JsonValue | undefined; }; };
export interface GetScoresInput { path: GetScoresPath; signal?: AbortSignal; }

export type ListAttributionsQuery = { "cursor"?: string; "limit"?: number; };
export type ListAttributionsResult = { "data": Array<RecordEnvelope & { "payload": ExecutionAttribution; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListAttributionsInput { query?: ListAttributionsQuery; signal?: AbortSignal; }

export type CreateAttributionsBody = ExecutionAttributionRequest;
export type CreateAttributionsResult = { "data": RecordEnvelope & { "payload": ExecutionAttribution; [key: string]: JsonValue | undefined; }; };
export interface CreateAttributionsInput { body: CreateAttributionsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetAttributionsPath = { "id": string; };
export type GetAttributionsResult = { "data": RecordEnvelope & { "payload": ExecutionAttribution; [key: string]: JsonValue | undefined; }; };
export interface GetAttributionsInput { path: GetAttributionsPath; signal?: AbortSignal; }

export type ListAnomaliesQuery = { "cursor"?: string; "limit"?: number; };
export type ListAnomaliesResult = { "data": Array<RecordEnvelope & { "payload": Anomaly; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListAnomaliesInput { query?: ListAnomaliesQuery; signal?: AbortSignal; }

export type CreateAnomaliesBody = AnomalyDetectionRequest;
export type CreateAnomaliesResult = { "data": RecordEnvelope & { "payload": Anomaly; [key: string]: JsonValue | undefined; }; };
export interface CreateAnomaliesInput { body: CreateAnomaliesBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetAnomaliesPath = { "id": string; };
export type GetAnomaliesResult = { "data": RecordEnvelope & { "payload": Anomaly; [key: string]: JsonValue | undefined; }; };
export interface GetAnomaliesInput { path: GetAnomaliesPath; signal?: AbortSignal; }

export type ListTreasuryEntriesQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryEntriesResult = { "data": Array<RecordEnvelope & { "payload": TreasuryBucket; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListTreasuryEntriesInput { query?: ListTreasuryEntriesQuery; signal?: AbortSignal; }

export type CreateTreasuryEntriesBody = { "payload": TreasuryBucket; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateTreasuryEntriesResult = { "data": RecordEnvelope & { "payload": TreasuryBucket; [key: string]: JsonValue | undefined; }; };
export interface CreateTreasuryEntriesInput { body: CreateTreasuryEntriesBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetTreasuryEntriesPath = { "id": string; };
export type GetTreasuryEntriesResult = { "data": RecordEnvelope & { "payload": TreasuryBucket; [key: string]: JsonValue | undefined; }; };
export interface GetTreasuryEntriesInput { path: GetTreasuryEntriesPath; signal?: AbortSignal; }

export type ListCapitalRequirementsQuery = { "cursor"?: string; "limit"?: number; };
export type ListCapitalRequirementsResult = { "data": Array<RecordEnvelope & { "payload": CapitalRequirementStudy; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListCapitalRequirementsInput { query?: ListCapitalRequirementsQuery; signal?: AbortSignal; }

export type CreateCapitalRequirementsBody = CapitalRequirementRequest;
export type CreateCapitalRequirementsResult = { "data": RecordEnvelope & { "payload": CapitalRequirementStudy; [key: string]: JsonValue | undefined; }; };
export interface CreateCapitalRequirementsInput { body: CreateCapitalRequirementsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetCapitalRequirementsPath = { "id": string; };
export type GetCapitalRequirementsResult = { "data": RecordEnvelope & { "payload": CapitalRequirementStudy; [key: string]: JsonValue | undefined; }; };
export interface GetCapitalRequirementsInput { path: GetCapitalRequirementsPath; signal?: AbortSignal; }

export type ListTreasuryStressTestsQuery = { "cursor"?: string; "limit"?: number; };
export type ListTreasuryStressTestsResult = { "data": Array<RecordEnvelope & { "payload": TreasuryStressStudy; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListTreasuryStressTestsInput { query?: ListTreasuryStressTestsQuery; signal?: AbortSignal; }

export type CreateTreasuryStressTestsBody = TreasuryStressRequest;
export type CreateTreasuryStressTestsResult = { "data": RecordEnvelope & { "payload": TreasuryStressStudy; [key: string]: JsonValue | undefined; }; };
export interface CreateTreasuryStressTestsInput { body: CreateTreasuryStressTestsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetTreasuryStressTestsPath = { "id": string; };
export type GetTreasuryStressTestsResult = { "data": RecordEnvelope & { "payload": TreasuryStressStudy; [key: string]: JsonValue | undefined; }; };
export interface GetTreasuryStressTestsInput { path: GetTreasuryStressTestsPath; signal?: AbortSignal; }

export type ListVenuesQuery = { "cursor"?: string; "limit"?: number; };
export type ListVenuesResult = { "data": Array<RecordEnvelope & { "payload": VenueProfile; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListVenuesInput { query?: ListVenuesQuery; signal?: AbortSignal; }

export type CreateVenuesBody = { "payload": VenueProfile; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateVenuesResult = { "data": RecordEnvelope & { "payload": VenueProfile; [key: string]: JsonValue | undefined; }; };
export interface CreateVenuesInput { body: CreateVenuesBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetVenuesPath = { "id": string; };
export type GetVenuesResult = { "data": RecordEnvelope & { "payload": VenueProfile; [key: string]: JsonValue | undefined; }; };
export interface GetVenuesInput { path: GetVenuesPath; signal?: AbortSignal; }

export type SupersedeVenuesPath = { "id": string; };
export type SupersedeVenuesBody = { "payload"?: VenueProfile; "status"?: "DRAFT" | "VALIDATED" | "PAUSED" | "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeVenuesResult = { "data": RecordEnvelope & { "payload": VenueProfile; [key: string]: JsonValue | undefined; }; };
export interface SupersedeVenuesInput { path: SupersedeVenuesPath; body: SupersedeVenuesBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListVenueObservationsQuery = { "cursor"?: string; "limit"?: number; };
export type ListVenueObservationsResult = { "data": Array<RecordEnvelope & { "payload": VenueObservation; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListVenueObservationsInput { query?: ListVenueObservationsQuery; signal?: AbortSignal; }

export type GetVenueObservationsPath = { "id": string; };
export type GetVenueObservationsResult = { "data": RecordEnvelope & { "payload": VenueObservation; [key: string]: JsonValue | undefined; }; };
export interface GetVenueObservationsInput { path: GetVenueObservationsPath; signal?: AbortSignal; }

export type ListAllocationPlansQuery = { "cursor"?: string; "limit"?: number; };
export type ListAllocationPlansResult = { "data": Array<RecordEnvelope & { "payload": AllocationPlan; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListAllocationPlansInput { query?: ListAllocationPlansQuery; signal?: AbortSignal; }

export type CreateAllocationPlansBody = AllocationRequest;
export type CreateAllocationPlansResult = { "data": RecordEnvelope & { "payload": AllocationPlan; [key: string]: JsonValue | undefined; }; };
export interface CreateAllocationPlansInput { body: CreateAllocationPlansBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetAllocationPlansPath = { "id": string; };
export type GetAllocationPlansResult = { "data": RecordEnvelope & { "payload": AllocationPlan; [key: string]: JsonValue | undefined; }; };
export interface GetAllocationPlansInput { path: GetAllocationPlansPath; signal?: AbortSignal; }

export type ListMigrationPlansQuery = { "cursor"?: string; "limit"?: number; };
export type ListMigrationPlansResult = { "data": Array<RecordEnvelope & { "payload": MigrationPlan; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListMigrationPlansInput { query?: ListMigrationPlansQuery; signal?: AbortSignal; }

export type CreateMigrationPlansBody = MigrationRequest;
export type CreateMigrationPlansResult = { "data": RecordEnvelope & { "payload": MigrationPlan; [key: string]: JsonValue | undefined; }; };
export interface CreateMigrationPlansInput { body: CreateMigrationPlansBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetMigrationPlansPath = { "id": string; };
export type GetMigrationPlansResult = { "data": RecordEnvelope & { "payload": MigrationPlan; [key: string]: JsonValue | undefined; }; };
export interface GetMigrationPlansInput { path: GetMigrationPlansPath; signal?: AbortSignal; }

export type ListAutonomyPoliciesQuery = { "cursor"?: string; "limit"?: number; };
export type ListAutonomyPoliciesResult = { "data": Array<RecordEnvelope & { "payload": AutonomyPolicy; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListAutonomyPoliciesInput { query?: ListAutonomyPoliciesQuery; signal?: AbortSignal; }

export type CreateAutonomyPoliciesBody = { "payload": AutonomyPolicyInput; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateAutonomyPoliciesResult = { "data": RecordEnvelope & { "payload": AutonomyPolicy; [key: string]: JsonValue | undefined; } | { "policy": RecordEnvelope & { "payload": AutonomyPolicy; [key: string]: JsonValue | undefined; }; "safeAuthorityEvidence": OperatingSystemEvent; }; };
export interface CreateAutonomyPoliciesInput { body: CreateAutonomyPoliciesBody; idempotencyKey: string; ifMatch?: string; signal?: AbortSignal; }

export type GetAutonomyPoliciesPath = { "id": string; };
export type GetAutonomyPoliciesResult = { "data": RecordEnvelope & { "payload": AutonomyPolicy; [key: string]: JsonValue | undefined; }; };
export interface GetAutonomyPoliciesInput { path: GetAutonomyPoliciesPath; signal?: AbortSignal; }

export type SupersedeAutonomyPoliciesPath = { "id": string; };
export type SupersedeAutonomyPoliciesBody = { "payload"?: AutonomyPolicy; "status"?: "ACTIVE" | "PAUSED" | "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeAutonomyPoliciesResult = { "data": RecordEnvelope & { "payload": AutonomyPolicy; [key: string]: JsonValue | undefined; }; };
export interface SupersedeAutonomyPoliciesInput { path: SupersedeAutonomyPoliciesPath; body: SupersedeAutonomyPoliciesBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListPolicyIntentDraftsQuery = { "cursor"?: string; "limit"?: number; };
export type ListPolicyIntentDraftsResult = { "data": Array<RecordEnvelope & { "payload": PolicyIntentDraft; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListPolicyIntentDraftsInput { query?: ListPolicyIntentDraftsQuery; signal?: AbortSignal; }

export type CreatePolicyIntentDraftsBody = PolicyExtractRequest;
export type CreatePolicyIntentDraftsResult = { "data": PolicyDraftResult; };
export interface CreatePolicyIntentDraftsInput { body: CreatePolicyIntentDraftsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetPolicyIntentDraftsPath = { "id": string; };
export type GetPolicyIntentDraftsResult = { "data": RecordEnvelope & { "payload": PolicyIntentDraft; [key: string]: JsonValue | undefined; }; };
export interface GetPolicyIntentDraftsInput { path: GetPolicyIntentDraftsPath; signal?: AbortSignal; }

export type ListQuoteSetsQuery = { "cursor"?: string; "limit"?: number; };
export type ListQuoteSetsResult = { "data": Array<RecordEnvelope & { "payload": ProtectedExecutionQuoteSet; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListQuoteSetsInput { query?: ListQuoteSetsQuery; signal?: AbortSignal; }

export type AdmitProtectedExecutionQuoteSetBody = { "quoteRequestId": string; "quotes": Array<ProtectedExecutionQuote>; "unavailableReasons": Array<string>; "reason": string; };
export type AdmitProtectedExecutionQuoteSetResult = { "data": RecordEnvelope & { "payload": ProtectedExecutionQuoteSet; [key: string]: JsonValue | undefined; }; };
export interface AdmitProtectedExecutionQuoteSetInput { body: AdmitProtectedExecutionQuoteSetBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type GetQuoteSetsPath = { "id": string; };
export type GetQuoteSetsResult = { "data": RecordEnvelope & { "payload": ProtectedExecutionQuoteSet; [key: string]: JsonValue | undefined; }; };
export interface GetQuoteSetsInput { path: GetQuoteSetsPath; signal?: AbortSignal; }

export type ListProtectedExecutionPlansQuery = { "cursor"?: string; "limit"?: number; };
export type ListProtectedExecutionPlansResult = { "data": Array<RecordEnvelope & { "payload": ProtectedExecutionPlan; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListProtectedExecutionPlansInput { query?: ListProtectedExecutionPlansQuery; signal?: AbortSignal; }

export type PrepareProtectedExecutionPlanBody = { "quoteSetId": string; "childLegCount": number; "reason": string; };
export type PrepareProtectedExecutionPlanResult = { "data": { "id": string; "organizationId": string; "recordType": OperatingSystemRecordType; "version": number; "status": OperatingSystemRecordStatus; "payload": ProtectedExecutionPlan; "artifactHash": Hash; "evidenceHashes": Array<Hash>; "createdBy": string; "reason": string; "requestId": string; "createdAt": string; "updatedAt": string; "supersedesVersion"?: number; "resourceVersion": Hash; "stateHash": Hash; "publicMempoolFallbackDerivedFromPolicy": true; "executionBroadcast": false; }; };
export interface PrepareProtectedExecutionPlanInput { body: PrepareProtectedExecutionPlanBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetProtectedExecutionPlansPath = { "id": string; };
export type GetProtectedExecutionPlansResult = { "data": RecordEnvelope & { "payload": ProtectedExecutionPlan; [key: string]: JsonValue | undefined; }; };
export interface GetProtectedExecutionPlansInput { path: GetProtectedExecutionPlansPath; signal?: AbortSignal; }

export type ListDeveloperCredentialsQuery = { "cursor"?: string; "limit"?: number; };
export type ListDeveloperCredentialsResult = { "data": Array<RecordEnvelope & { "payload": DeveloperCredential; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListDeveloperCredentialsInput { query?: ListDeveloperCredentialsQuery; signal?: AbortSignal; }

export type CreateDeveloperCredentialsBody = DeveloperCredentialRequest;
export type CreateDeveloperCredentialsResult = { "data": { "credential": RecordEnvelope & { "payload": DeveloperCredential; [key: string]: JsonValue | undefined; }; "secret": string; "secretReturnedOnce": true; }; };
export interface CreateDeveloperCredentialsInput { body: CreateDeveloperCredentialsBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetDeveloperCredentialsPath = { "id": string; };
export type GetDeveloperCredentialsResult = { "data": RecordEnvelope & { "payload": DeveloperCredential; [key: string]: JsonValue | undefined; }; };
export interface GetDeveloperCredentialsInput { path: GetDeveloperCredentialsPath; signal?: AbortSignal; }

export type SupersedeDeveloperCredentialsPath = { "id": string; };
export type SupersedeDeveloperCredentialsBody = { "status"?: "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeDeveloperCredentialsResult = { "data": RecordEnvelope & { "payload": DeveloperCredential; [key: string]: JsonValue | undefined; }; };
export interface SupersedeDeveloperCredentialsInput { path: SupersedeDeveloperCredentialsPath; body: SupersedeDeveloperCredentialsBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListWebhooksQuery = { "cursor"?: string; "limit"?: number; };
export type ListWebhooksResult = { "data": Array<RecordEnvelope & { "payload": WebhookSubscription; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListWebhooksInput { query?: ListWebhooksQuery; signal?: AbortSignal; }

export type CreateWebhooksBody = WebhookRequest;
export type CreateWebhooksResult = { "data": { "subscription": RecordEnvelope & { "payload": WebhookSubscription; [key: string]: JsonValue | undefined; }; "signingSecret": string; "signatureInput": "timestamp.deliveryId.body"; "secretReturnedOnce": true; }; };
export interface CreateWebhooksInput { body: CreateWebhooksBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetWebhooksPath = { "id": string; };
export type GetWebhooksResult = { "data": RecordEnvelope & { "payload": WebhookSubscription; [key: string]: JsonValue | undefined; }; };
export interface GetWebhooksInput { path: GetWebhooksPath; signal?: AbortSignal; }

export type SupersedeWebhooksPath = { "id": string; };
export type SupersedeWebhooksBody = { "status"?: "PAUSED" | "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeWebhooksResult = { "data": RecordEnvelope & { "payload": WebhookSubscription; [key: string]: JsonValue | undefined; }; };
export interface SupersedeWebhooksInput { path: SupersedeWebhooksPath; body: SupersedeWebhooksBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListStrategyPackagesQuery = { "cursor"?: string; "limit"?: number; };
export type ListStrategyPackagesResult = { "data": Array<RecordEnvelope & { "payload": StrategyPackage; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListStrategyPackagesInput { query?: ListStrategyPackagesQuery; signal?: AbortSignal; }

export type CreateStrategyPackageCandidateBody = { "payload": StrategyPackageCandidate; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateStrategyPackageCandidateResult = { "data": RecordEnvelope & { "payload": StrategyPackage; [key: string]: JsonValue | undefined; }; };
export interface CreateStrategyPackageCandidateInput { body: CreateStrategyPackageCandidateBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetStrategyPackagesPath = { "id": string; };
export type GetStrategyPackagesResult = { "data": RecordEnvelope & { "payload": StrategyPackage; [key: string]: JsonValue | undefined; }; };
export interface GetStrategyPackagesInput { path: GetStrategyPackagesPath; signal?: AbortSignal; }

export type ListPartnersQuery = { "cursor"?: string; "limit"?: number; };
export type ListPartnersResult = { "data": Array<RecordEnvelope & { "payload": PartnerTenant; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListPartnersInput { query?: ListPartnersQuery; signal?: AbortSignal; }

export type CreateVerifiedPartnerTenantBody = { "payload": PartnerTenantCreate; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateVerifiedPartnerTenantResult = { "data": RecordEnvelope & { "payload": PartnerTenant; [key: string]: JsonValue | undefined; }; };
export interface CreateVerifiedPartnerTenantInput { body: CreateVerifiedPartnerTenantBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetPartnersPath = { "id": string; };
export type GetPartnersResult = { "data": RecordEnvelope & { "payload": PartnerTenant; [key: string]: JsonValue | undefined; }; };
export interface GetPartnersInput { path: GetPartnersPath; signal?: AbortSignal; }

export type UpdatePartnerConfigurationPath = { "id": string; };
export type UpdatePartnerConfigurationBody = { "payload": PartnerTenantCreate; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type UpdatePartnerConfigurationResult = { "data": RecordEnvelope & { "payload": PartnerTenant; [key: string]: JsonValue | undefined; }; };
export interface UpdatePartnerConfigurationInput { path: UpdatePartnerConfigurationPath; body: UpdatePartnerConfigurationBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListMarketMakerMandatesQuery = { "cursor"?: string; "limit"?: number; };
export type ListMarketMakerMandatesResult = { "data": Array<RecordEnvelope & { "payload": MarketMakerMandate; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListMarketMakerMandatesInput { query?: ListMarketMakerMandatesQuery; signal?: AbortSignal; }

export type CreateMarketMakerMandateBody = { "payload": MarketMakerMandate; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type CreateMarketMakerMandateResult = { "data": { "mandate": RecordEnvelope & { "payload": MarketMakerMandate; [key: string]: JsonValue | undefined; }; "oversight": MarketMakerOversight; }; };
export interface CreateMarketMakerMandateInput { body: CreateMarketMakerMandateBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetMarketMakerMandatesPath = { "id": string; };
export type GetMarketMakerMandatesResult = { "data": RecordEnvelope & { "payload": MarketMakerMandate; [key: string]: JsonValue | undefined; }; };
export interface GetMarketMakerMandatesInput { path: GetMarketMakerMandatesPath; signal?: AbortSignal; }

export type SupersedeMarketMakerMandatesPath = { "id": string; };
export type SupersedeMarketMakerMandatesBody = { "status"?: "PAUSED" | "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeMarketMakerMandatesResult = { "data": RecordEnvelope & { "payload": MarketMakerMandate; [key: string]: JsonValue | undefined; }; };
export interface SupersedeMarketMakerMandatesInput { path: SupersedeMarketMakerMandatesPath; body: SupersedeMarketMakerMandatesBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListIncentiveProgramsQuery = { "cursor"?: string; "limit"?: number; };
export type ListIncentiveProgramsResult = { "data": Array<RecordEnvelope & { "payload": IncentiveProgram; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListIncentiveProgramsInput { query?: ListIncentiveProgramsQuery; signal?: AbortSignal; }

export type OptimizeIncentiveProgramBody = { "payload": IncentiveProgram; "status"?: OperatingSystemRecordStatus; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type OptimizeIncentiveProgramResult = { "data": IncentiveOptimizationResult; };
export interface OptimizeIncentiveProgramInput { body: OptimizeIncentiveProgramBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetIncentiveProgramsPath = { "id": string; };
export type GetIncentiveProgramsResult = { "data": RecordEnvelope & { "payload": IncentiveProgram; [key: string]: JsonValue | undefined; }; };
export interface GetIncentiveProgramsInput { path: GetIncentiveProgramsPath; signal?: AbortSignal; }

export type SupersedeIncentiveProgramsPath = { "id": string; };
export type SupersedeIncentiveProgramsBody = { "status"?: "REVOKED"; "evidenceHashes"?: Array<Hash>; "reason": string; };
export type SupersedeIncentiveProgramsResult = { "data": RecordEnvelope & { "payload": IncentiveProgram; [key: string]: JsonValue | undefined; }; };
export interface SupersedeIncentiveProgramsInput { path: SupersedeIncentiveProgramsPath; body: SupersedeIncentiveProgramsBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListPassportsQuery = { "cursor"?: string; "limit"?: number; };
export type ListPassportsResult = { "data": Array<RecordEnvelope & { "payload": LiquidityPassport; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListPassportsInput { query?: ListPassportsQuery; signal?: AbortSignal; }

export type PublishLiquidityPassportBody = { "payload": { "passportVersion": "liquidity-passport-v1"; "artifactRendererVersion": "liquidity-passport-artifacts-v1" | "liquidity-passport-artifacts-v2"; "signatureAlgorithm": "Ed25519"; "signerProviderId": string; "signerKeyResourceVersion": Hash; "slug": string; "vaultId": string; "issuerName": string; "reportBrand"?: { "partnerId": string; "name": string; "accentColor": string; "logoContentHash"?: Hash; "sourceBinding": { "partnerOrganizationId": string; "partnerConfigurationResourceVersion": Hash; "partnerConfigurationArtifactHash": Hash; "consentId": string; "consentResourceVersion": Hash; "consentArtifactHash": Hash; }; }; "generatedAt": string; "validUntil": string; "usableDepthByTradeSize": Array<{ "tradeSizeQuote": AtomicAmount; "buySlippagePips": Pips; "sellSlippagePips": Pips; }>; "historicalReliabilityPips": Pips; "policyCompliancePips": Pips | null; "policyLimits"?: { "level": 0 | 1 | 2 | 3 | 4; "maximumAmountPerTransaction": AtomicAmount; "maximumDailyTurnover": AtomicAmount; "maximumSlippagePips": Pips; "approvedContracts": Array<Address>; "approvedAssets": Array<Address>; "approvedAdapterIds": Array<string>; "minimumSecondsBetweenActions": number; "minimumPriceX18"?: AtomicAmount; "maximumPriceX18"?: AtomicAmount; "oracleMaximumAgeSeconds": number; "expiresAt": string; "controlEpoch": AtomicAmount; "publicMempoolFallbackAllowed": boolean; }; "reconciledPositionCount": number; "majorIncidentCount": number; "treasuryOwnedLiquidityQuote"?: AtomicAmount; "rentedLiquidityQuote"?: AtomicAmount; "incidentDetails"?: { "v1IncidentEvidenceHashes": Array<Hash>; "anomalies": Array<{ "detectorVersion": "robust-mad-v1"; "kind": "LIQUIDITY_DISAPPEARANCE" | "ONE_SIDED_FLOW" | "INACTIVE_RANGE" | "STABLECOIN_DEPEG" | "ORACLE_DISAGREEMENT" | "INVENTORY_ACCUMULATION" | "EXCESSIVE_TURNOVER" | "MANIPULATION_INDICATOR" | "SIMULATED_REALIZED_DIVERGENCE"; "severity": "INFO" | "WARNING" | "CRITICAL"; "artifactHash": Hash; }>; }; "externalManagerExposureQuote"?: AtomicAmount; "externalManagerNames"?: Array<string>; "dataFreshnessSeconds": number; "disclosure": { "showTreasuryOwnership": boolean; "showExternalManagerNames": boolean; "showIncidentDetails": boolean; "showPolicyLimits": boolean; }; "reportHashes": Array<Hash>; "sourceBindings": LiquidityPassportSourceBindings; "resultsRegistryProviderId"?: string; "resultsRegistryProviderResourceVersion"?: Hash; "resultsRegistryProviderAttestationHash"?: Hash; "resultsRegistryCommitmentHash"?: Hash; "resultsRegistryReceipt"?: { "receiptVersion": "liquidity-passport-results-registry-receipt-v1"; "providerId": string; "providerResourceVersion": Hash; "providerAttestationHash": Hash; "passportSubjectHash": Hash; "commitmentHash": Hash; "issuedAt": string; "signature": string; }; "supersedesPassportHash"?: Hash; "contentHash": Hash; "signature": string; "marketQualityScoreId": string; }; "reason": string; };
export type PublishLiquidityPassportResult = { "data": { "passport": RecordEnvelope & { "payload": LiquidityPassport; [key: string]: JsonValue | undefined; }; "reportJob": OperatingSystemJob; "signedFormatsReady": Array<"JSON" | "HTML" | "PDF" | "CSV">; "artifactState": "PENDING_IMMUTABLE_OBJECT_REGISTRATION"; "executionAuthorityGranted": false; }; };
export interface PublishLiquidityPassportInput { body: PublishLiquidityPassportBody; idempotencyKey: string; ifMatch?: string; signal?: AbortSignal; }

export type GetPassportsPath = { "id": string; };
export type GetPassportsResult = { "data": RecordEnvelope & { "payload": LiquidityPassport; [key: string]: JsonValue | undefined; }; };
export interface GetPassportsInput { path: GetPassportsPath; signal?: AbortSignal; }

export type GetOperatingSystemOpenApiResult = OpenApiDocument;
export interface GetOperatingSystemOpenApiInput { signal?: AbortSignal; }

export type GetOperatingSystemStatusResult = { "data": OperatingSystemStatus; };
export interface GetOperatingSystemStatusInput { signal?: AbortSignal; }

export type IssueOperatingSystemOAuthTokenBody = { "grant_type": "client_credentials"; "scope"?: string; };
export type IssueOperatingSystemOAuthTokenResult = OAuthTokenResponse;
export interface IssueOperatingSystemOAuthTokenInput { body: IssueOperatingSystemOAuthTokenBody; basicAuth: { clientId: string; clientSecret: string }; signal?: AbortSignal; }

export type ActivateMarketQualityScorePath = { "id": string; };
export type ActivateMarketQualityScoreBody = MarketQualityScoreActivationRequest;
export type ActivateMarketQualityScoreResult = { "data": { "score": RecordEnvelope & { "payload": MarketQualityScore; [key: string]: JsonValue | undefined; }; "review": OperatingSystemEvent; "executionAuthorityGranted": false; }; };
export interface ActivateMarketQualityScoreInput { path: ActivateMarketQualityScorePath; body: ActivateMarketQualityScoreBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type CreateProtectedExecutionQuoteRequestBody = { "vaultId": string; "chainId": number; "assetIn": Address; "assetOut": Address; "settlementContract": Address; "settlementAdapterId": string; "amountIn": PositiveAtomicAmount; "maximumSlippagePips": Pips; "expiresAt": string; "providerIds": Array<string>; "reason": string; };
export type CreateProtectedExecutionQuoteRequestResult = { "data": { "id": string; "organizationId": string; "recordType": OperatingSystemRecordType; "version": number; "status": OperatingSystemRecordStatus; "payload": ProtectedExecutionQuoteRequest; "artifactHash": Hash; "evidenceHashes": Array<Hash>; "createdBy": string; "reason": string; "requestId": string; "createdAt": string; "updatedAt": string; "supersedesVersion"?: number; "resourceVersion": Hash; "publicMempoolFallbackDerivedFromPolicy": true; "executable": false; }; };
export interface CreateProtectedExecutionQuoteRequestInput { body: CreateProtectedExecutionQuoteRequestBody; idempotencyKey: string; signal?: AbortSignal; }

export type AdmitProtectedExecutionQuotesForRequestPath = { "id": string; };
export type AdmitProtectedExecutionQuotesForRequestBody = { "quoteRequestId": string; "quotes": Array<ProtectedExecutionQuote>; "unavailableReasons": Array<string>; "reason": string; };
export type AdmitProtectedExecutionQuotesForRequestResult = { "data": RecordEnvelope & { "payload": ProtectedExecutionQuoteSet; [key: string]: JsonValue | undefined; }; };
export interface AdmitProtectedExecutionQuotesForRequestInput { path: AdmitProtectedExecutionQuotesForRequestPath; body: AdmitProtectedExecutionQuotesForRequestBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type GetProtectedExecutionPlanStatePath = { "id": string; };
export type GetProtectedExecutionPlanStateResult = { "data": { "plan": ProtectedExecutionPlan; "stateHash": Hash; }; };
export interface GetProtectedExecutionPlanStateInput { path: GetProtectedExecutionPlanStatePath; signal?: AbortSignal; }

export type AppendProtectedExecutionLegTransitionPath = { "id": string; };
export type AppendProtectedExecutionLegTransitionBody = { "childLegId": string; "toStatus": "SUBMITTED" | "FINALIZED_RECONCILED" | "PAUSED" | "FAILED"; "previousStateHash": Hash; "reason": string; };
export type AppendProtectedExecutionLegTransitionResult = { "data": { "record": RecordEnvelope & { "payload": ProtectedExecutionPlan; [key: string]: JsonValue | undefined; }; "transition": OperatingSystemEvent; "stateHash": Hash; "inputConserved": boolean; "executionBroadcast": false; }; };
export interface AppendProtectedExecutionLegTransitionInput { path: AppendProtectedExecutionLegTransitionPath; body: AppendProtectedExecutionLegTransitionBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type RefreshTreasuryLedgerEntryPath = { "id": string; };
export type RefreshTreasuryLedgerEntryBody = TreasuryLedgerRefreshRequest;
export type RefreshTreasuryLedgerEntryResult = { "data": RecordEnvelope & { "payload": TreasuryBucket; [key: string]: JsonValue | undefined; }; };
export interface RefreshTreasuryLedgerEntryInput { path: RefreshTreasuryLedgerEntryPath; body: RefreshTreasuryLedgerEntryBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type RetireTreasuryLedgerEntryPath = { "id": string; };
export type RetireTreasuryLedgerEntryBody = TreasuryLedgerRetirementRequest;
export type RetireTreasuryLedgerEntryResult = { "data": RecordEnvelope & { "payload": TreasuryBucket; [key: string]: JsonValue | undefined; }; };
export interface RetireTreasuryLedgerEntryInput { path: RetireTreasuryLedgerEntryPath; body: RetireTreasuryLedgerEntryBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type GetOperatingSystemWorkspaceResult = { "data": OperatingSystemWorkspace; };
export interface GetOperatingSystemWorkspaceInput { signal?: AbortSignal; }

export type ListQualifiedVaultsV2Query = { "cursor"?: string; "limit"?: number; };
export type ListQualifiedVaultsV2Result = { "data": Array<QualifiedVaultV2>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListQualifiedVaultsV2Input { query?: ListQualifiedVaultsV2Query; signal?: AbortSignal; }

export type GetQualifiedVaultV2Path = { "id": string; };
export type GetQualifiedVaultV2Result = { "data": QualifiedVaultV2; };
export interface GetQualifiedVaultV2Input { path: GetQualifiedVaultV2Path; signal?: AbortSignal; }

export type ListExecutionReceiptsV2Query = { "cursor"?: string; "limit"?: number; };
export type ListExecutionReceiptsV2Result = { "data": Array<ExecutionReceiptV2>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListExecutionReceiptsV2Input { query?: ListExecutionReceiptsV2Query; signal?: AbortSignal; }

export type GetExecutionReceiptV2Path = { "id": string; };
export type GetExecutionReceiptV2Result = { "data": ExecutionReceiptV2; };
export interface GetExecutionReceiptV2Input { path: GetExecutionReceiptV2Path; signal?: AbortSignal; }

export type ListAlertsV2Query = { "cursor"?: string; "limit"?: number; };
export type ListAlertsV2Result = { "data": Array<RecordEnvelope & { "payload": Anomaly; [key: string]: JsonValue | undefined; }>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListAlertsV2Input { query?: ListAlertsV2Query; signal?: AbortSignal; }

export type ListProofV2Query = { "cursor"?: string; "limit"?: number; };
export type ListProofV2Result = { "data": Array<ProofResource>; "meta": { "count": number; "hasMore": boolean; "nextCursor"?: string; }; };
export interface ListProofV2Input { query?: ListProofV2Query; signal?: AbortSignal; }

export type ListOperatingSystemProvidersResult = { "data": Array<OperatingSystemProvider>; };
export interface ListOperatingSystemProvidersInput { signal?: AbortSignal; }

export type PutOperatingSystemProviderBody = ProviderRegistrationRequest;
export type PutOperatingSystemProviderResult = { "data": OperatingSystemProvider; };
export interface PutOperatingSystemProviderInput { body: PutOperatingSystemProviderBody; idempotencyKey: string; ifMatch?: string; signal?: AbortSignal; }

export type ListOperatingSystemArtifactsQuery = { "recordType"?: string; "recordId"?: string; };
export type ListOperatingSystemArtifactsResult = { "data": Array<OperatingSystemArtifact>; };
export interface ListOperatingSystemArtifactsInput { query?: ListOperatingSystemArtifactsQuery; signal?: AbortSignal; }

export type GetTreasurySummaryResult = { "data": TreasurySummary; };
export interface GetTreasurySummaryInput { signal?: AbortSignal; }

export type GetUnifiedLiquidityMapResult = { "data": UnifiedLiquidityMap; };
export interface GetUnifiedLiquidityMapInput { signal?: AbortSignal; }

export type RunNonCustodialSandboxStudyBody = SandboxSimulationStudyRequest;
export type RunNonCustodialSandboxStudyResult = { "data": { "study": RecordEnvelope & { "payload": SimulationStudy; [key: string]: JsonValue | undefined; }; "sandbox": true; "custodyAuthorityGranted": false; "signingAuthorityGranted": false; "executionAuthorityGranted": false; "networkCodeExecuted": false; }; };
export interface RunNonCustodialSandboxStudyInput { body: RunNonCustodialSandboxStudyBody; idempotencyKey: string; signal?: AbortSignal; }

export type CreateStudyShareLinkPath = { "id": string; };
export type CreateStudyShareLinkBody = StudyShareRequest;
export type CreateStudyShareLinkResult = { "data": RecordEnvelope & { "payload": StudyShare; [key: string]: JsonValue | undefined; }; };
export interface CreateStudyShareLinkInput { path: CreateStudyShareLinkPath; body: CreateStudyShareLinkBody; idempotencyKey: string; signal?: AbortSignal; }

export type RevokeStudyShareLinkPath = { "id": string; };
export type RevokeStudyShareLinkBody = { "reason": string; };
export type RevokeStudyShareLinkResult = { "data": RecordEnvelope & { "payload": StudyShare; [key: string]: JsonValue | undefined; }; };
export interface RevokeStudyShareLinkInput { path: RevokeStudyShareLinkPath; body: RevokeStudyShareLinkBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type RevokeLiquidityPassportPath = { "id": string; };
export type RevokeLiquidityPassportBody = { "reason": string; };
export type RevokeLiquidityPassportResult = { "data": RecordEnvelope & { "payload": LiquidityPassport; [key: string]: JsonValue | undefined; }; };
export interface RevokeLiquidityPassportInput { path: RevokeLiquidityPassportPath; body: RevokeLiquidityPassportBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type CreateSignedStudyReportPath = { "id": string; };
export type CreateSignedStudyReportBody = SignedStudyReportRequest;
export type CreateSignedStudyReportResult = { "data": { "job": OperatingSystemJob; "source": { "id": string; "version": number; "artifactHash": Hash; }; }; };
export interface CreateSignedStudyReportInput { path: CreateSignedStudyReportPath; body: CreateSignedStudyReportBody; idempotencyKey: string; signal?: AbortSignal; }

export type ListStudyReportJobsPath = { "id": string; };
export type ListStudyReportJobsResult = { "data": Array<OperatingSystemJob>; };
export interface ListStudyReportJobsInput { path: ListStudyReportJobsPath; signal?: AbortSignal; }

export type WrapLegacyStrategyDefinitionBody = { "simulationId": string; "reason": string; };
export type WrapLegacyStrategyDefinitionResult = { "data": { "strategy": RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }; "compilation": StrategyCompilation; "sourceArtifactHash": Hash; "proposalAuthorityGranted": false; }; };
export interface WrapLegacyStrategyDefinitionInput { body: WrapLegacyStrategyDefinitionBody; idempotencyKey: string; signal?: AbortSignal; }

export type AdmitStrategyProposalPath = { "id": string; };
export type AdmitStrategyProposalBody = StrategyProposalAdmissionRequest;
export type AdmitStrategyProposalResult = { "data": { "admission": OperatingSystemEvent; "validation": StrategyProposalAdmission; "proposalAuthorityGranted": false; }; };
export interface AdmitStrategyProposalInput { path: AdmitStrategyProposalPath; body: AdmitStrategyProposalBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type GetStrategyEvidencePath = { "id": string; };
export type GetStrategyEvidenceQuery = { "resourceVersion": string; };
export type GetStrategyEvidenceResult = { "data": { "schemaVersion": "strategy-evidence-view-v1"; "strategy": RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }; "admissions": Array<{ "event": OperatingSystemEvent; "study": RecordEnvelope & { "payload": SimulationStudy; [key: string]: JsonValue | undefined; } | null; }>; "executionAuthorityGranted": false; }; };
export interface GetStrategyEvidenceInput { path: GetStrategyEvidencePath; query: GetStrategyEvidenceQuery; signal?: AbortSignal; }

export type GetIncentiveEvidencePath = { "id": string; };
export type GetIncentiveEvidenceQuery = { "resourceVersion": string; };
export type GetIncentiveEvidenceResult = { "data": { "schemaVersion": "incentive-evidence-view-v1"; "program": RecordEnvelope & { "payload": IncentiveProgram; [key: string]: JsonValue | undefined; }; "events": Array<OperatingSystemEvent>; "unboundEventCount": number; "executionPerformed": false; "executionAuthorityGranted": false; }; };
export interface GetIncentiveEvidenceInput { path: GetIncentiveEvidencePath; query: GetIncentiveEvidenceQuery; signal?: AbortSignal; }

export type ApproveStrategyPackagePath = { "id": string; };
export type ApproveStrategyPackageBody = StrategyPackageApprovalRequest;
export type ApproveStrategyPackageResult = { "data": RecordEnvelope & { "payload": StrategyPackage; [key: string]: JsonValue | undefined; }; };
export interface ApproveStrategyPackageInput { path: ApproveStrategyPackagePath; body: ApproveStrategyPackageBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type SeedStrategyFromApprovedPackagePath = { "id": string; };
export type SeedStrategyFromApprovedPackageBody = StrategyPackageSeedRequest;
export type SeedStrategyFromApprovedPackageResult = { "data": { "strategy": RecordEnvelope & { "payload": StrategyDefinitionV2; [key: string]: JsonValue | undefined; }; "sourcePackageId": string; "sourcePackageVersion": number; "sourcePackageResourceVersion": Hash; "sourcePackageArtifactHash": Hash; "safetyEnvelopeHash": Hash; "executionAuthorityGranted": false; "standardProposalSimulationApprovalSafeFlowRequired": true; }; };
export interface SeedStrategyFromApprovedPackageInput { path: SeedStrategyFromApprovedPackagePath; body: SeedStrategyFromApprovedPackageBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type RevokeStrategyPackagePath = { "id": string; };
export type RevokeStrategyPackageBody = { "reason": string; };
export type RevokeStrategyPackageResult = { "data": RecordEnvelope & { "payload": StrategyPackage; [key: string]: JsonValue | undefined; }; };
export interface RevokeStrategyPackageInput { path: RevokeStrategyPackagePath; body: RevokeStrategyPackageBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListProposalCommentsPath = { "id": string; };
export type ListProposalCommentsResult = { "data": Array<OperatingSystemEvent>; };
export interface ListProposalCommentsInput { path: ListProposalCommentsPath; signal?: AbortSignal; }

export type AppendProposalCommentPath = { "id": string; };
export type AppendProposalCommentBody = ProposalCommentRequest;
export type AppendProposalCommentResult = { "data": OperatingSystemEvent; };
export interface AppendProposalCommentInput { path: AppendProposalCommentPath; body: AppendProposalCommentBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type DecideProposalPath = { "id": string; };
export type DecideProposalBody = ProposalDecisionRequest;
export type DecideProposalResult = { "data": ProposalDecisionResult; };
export interface DecideProposalInput { path: DecideProposalPath; body: DecideProposalBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type RegisterProposalSafeSubmissionPath = { "id": string; };
export type RegisterProposalSafeSubmissionBody = ProposalSafeSubmissionRequest;
export type RegisterProposalSafeSubmissionResult = { "data": ProposalSafeSubmissionResult; };
export interface RegisterProposalSafeSubmissionInput { path: RegisterProposalSafeSubmissionPath; body: RegisterProposalSafeSubmissionBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type CompareProposalsBody = ProposalComparisonRequest;
export type CompareProposalsResult = { "data": ProposalComparison; };
export interface CompareProposalsInput { body: CompareProposalsBody; idempotencyKey: string; signal?: AbortSignal; }

export type AppendLaunchTimelineEventPath = { "id": string; };
export type AppendLaunchTimelineEventBody = TimelineEventRequest;
export type AppendLaunchTimelineEventResult = { "data": OperatingSystemEvent; };
export interface AppendLaunchTimelineEventInput { path: AppendLaunchTimelineEventPath; body: AppendLaunchTimelineEventBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type GetLaunchTimelinePath = { "id": string; };
export type GetLaunchTimelineResult = { "data": LaunchTimeline; };
export interface GetLaunchTimelineInput { path: GetLaunchTimelinePath; signal?: AbortSignal; }

export type CompleteLaunchTimelineEventPath = { "id": string; "eventId": string; };
export type CompleteLaunchTimelineEventBody = TimelineCompletionRequest;
export type CompleteLaunchTimelineEventResult = { "data": OperatingSystemEvent; };
export interface CompleteLaunchTimelineEventInput { path: CompleteLaunchTimelineEventPath; body: CompleteLaunchTimelineEventBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type SeedLaunchWorkspacePath = { "id": string; };
export type SeedLaunchWorkspaceBody = LaunchWorkspaceSeedRequest;
export type SeedLaunchWorkspaceResult = { "data": LaunchWorkspaceSeed; };
export interface SeedLaunchWorkspaceInput { path: SeedLaunchWorkspacePath; body: SeedLaunchWorkspaceBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type SeedIssuerIntentFromCapitalStudyPath = { "id": string; };
export type SeedIssuerIntentFromCapitalStudyBody = CapitalIntentSeedRequest;
export type SeedIssuerIntentFromCapitalStudyResult = { "data": RecordEnvelope & { "payload": IssuerIntent; [key: string]: JsonValue | undefined; }; };
export interface SeedIssuerIntentFromCapitalStudyInput { path: SeedIssuerIntentFromCapitalStudyPath; body: SeedIssuerIntentFromCapitalStudyBody; idempotencyKey: string; ifMatch?: string; signal?: AbortSignal; }

export type SeedLaunchPlanFromCapitalStudyPath = { "id": string; };
export type SeedLaunchPlanFromCapitalStudyBody = CapitalLaunchSeedRequest;
export type SeedLaunchPlanFromCapitalStudyResult = { "data": RecordEnvelope & { "payload": LaunchPlan; [key: string]: JsonValue | undefined; }; };
export interface SeedLaunchPlanFromCapitalStudyInput { path: SeedLaunchPlanFromCapitalStudyPath; body: SeedLaunchPlanFromCapitalStudyBody; idempotencyKey: string; ifMatch?: string; signal?: AbortSignal; }

export type ReserveTreasuryFromCapitalStudyPath = { "id": string; };
export type ReserveTreasuryFromCapitalStudyBody = CapitalReservationRequest;
export type ReserveTreasuryFromCapitalStudyResult = { "data": RecordEnvelope & { "payload": TreasuryBucket; [key: string]: JsonValue | undefined; }; };
export interface ReserveTreasuryFromCapitalStudyInput { path: ReserveTreasuryFromCapitalStudyPath; body: ReserveTreasuryFromCapitalStudyBody; idempotencyKey: string; signal?: AbortSignal; }

export type QueueVenueIndexPath = { "id": string; };
export type QueueVenueIndexBody = { "reason": string; };
export type QueueVenueIndexResult = { "data": OperatingSystemJob; };
export interface QueueVenueIndexInput { path: QueueVenueIndexPath; body: QueueVenueIndexBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetMigrationPlanStatePath = { "id": string; };
export type GetMigrationPlanStateResult = { "data": MigrationPlanStateResult; };
export interface GetMigrationPlanStateInput { path: GetMigrationPlanStatePath; signal?: AbortSignal; }

export type AppendMigrationPlanTransitionPath = { "id": string; };
export type AppendMigrationPlanTransitionBody = MigrationTransitionRequest;
export type AppendMigrationPlanTransitionResult = { "data": MigrationTransitionResult; };
export interface AppendMigrationPlanTransitionInput { path: AppendMigrationPlanTransitionPath; body: AppendMigrationPlanTransitionBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type CompilePolicyIntentPath = { "id": string; };
export type CompilePolicyIntentBody = { "reason": string; };
export type CompilePolicyIntentResult = { "data": PolicyCompilationResult; };
export interface CompilePolicyIntentInput { path: CompilePolicyIntentPath; body: CompilePolicyIntentBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type CreateStructuredPolicyIntentDraftBody = StructuredPolicyRequest;
export type CreateStructuredPolicyIntentDraftResult = { "data": PolicyDraftResult; };
export interface CreateStructuredPolicyIntentDraftInput { body: CreateStructuredPolicyIntentDraftBody; idempotencyKey: string; signal?: AbortSignal; }

export type CheckAutonomyPolicyBody = PolicyCheckRequest;
export type CheckAutonomyPolicyResult = { "data": PolicyCheckResult; };
export interface CheckAutonomyPolicyInput { body: CheckAutonomyPolicyBody; idempotencyKey: string; signal?: AbortSignal; }

export type RotateDeveloperCredentialPath = { "id": string; };
export type RotateDeveloperCredentialBody = { "reason": string; };
export type RotateDeveloperCredentialResult = { "data": { "credential": RecordEnvelope & { "payload": DeveloperCredential; [key: string]: JsonValue | undefined; }; "secret": string; "priorSecretRevoked": true; "secretReturnedOnce": true; }; };
export interface RotateDeveloperCredentialInput { path: RotateDeveloperCredentialPath; body: RotateDeveloperCredentialBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type GetPartnerPortfolioPath = { "partnerId": string; };
export type GetPartnerPortfolioResult = { "data": PartnerPortfolio; };
export interface GetPartnerPortfolioInput { path: GetPartnerPortfolioPath; signal?: AbortSignal; }

export type GetPartnerConsentOptionsQuery = { "partnerId": string; "partnerOrganizationId": string; };
export type GetPartnerConsentOptionsResult = { "data": PartnerConsentOptions; };
export interface GetPartnerConsentOptionsInput { query: GetPartnerConsentOptionsQuery; signal?: AbortSignal; }

export type GetPartnerPreparationContextPath = { "partnerId": string; };
export type GetPartnerPreparationContextQuery = { "issuerOrganizationId": string; };
export type GetPartnerPreparationContextResult = { "data": PartnerPreparationContext; };
export interface GetPartnerPreparationContextInput { path: GetPartnerPreparationContextPath; query: GetPartnerPreparationContextQuery; signal?: AbortSignal; }

export type ListPartnerPreparationsResult = { "data": Array<PartnerPreparationInboxEntry>; };
export interface ListPartnerPreparationsInput { signal?: AbortSignal; }

export type ImportPartnerPreparationPath = { "eventId": string; };
export type ImportPartnerPreparationBody = { "reason": string; };
export type ImportPartnerPreparationResult = { "data": PartnerPreparationDecisionResult; };
export interface ImportPartnerPreparationInput { path: ImportPartnerPreparationPath; body: ImportPartnerPreparationBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type DeclinePartnerPreparationPath = { "eventId": string; };
export type DeclinePartnerPreparationBody = { "reason": string; };
export type DeclinePartnerPreparationResult = { "data": PartnerPreparationDecisionResult; };
export interface DeclinePartnerPreparationInput { path: DeclinePartnerPreparationPath; body: DeclinePartnerPreparationBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type GetPartnerPreparationStatusPath = { "partnerId": string; "eventId": string; };
export type GetPartnerPreparationStatusQuery = { "issuerOrganizationId": string; };
export type GetPartnerPreparationStatusResult = { "data": PartnerPreparationStatus; };
export interface GetPartnerPreparationStatusInput { path: GetPartnerPreparationStatusPath; query: GetPartnerPreparationStatusQuery; signal?: AbortSignal; }

export type ListPartnerDomainChallengesResult = { "data": Array<PartnerDomainChallenge>; };
export interface ListPartnerDomainChallengesInput { signal?: AbortSignal; }

export type CreatePartnerDomainChallengeBody = PartnerDomainChallengeCreateRequest;
export type CreatePartnerDomainChallengeResult = { "data": PartnerDomainChallenge; };
export interface CreatePartnerDomainChallengeInput { body: CreatePartnerDomainChallengeBody; idempotencyKey: string; signal?: AbortSignal; }

export type GetPartnerDomainChallengePath = { "id": string; };
export type GetPartnerDomainChallengeResult = { "data": PartnerDomainChallenge; };
export interface GetPartnerDomainChallengeInput { path: GetPartnerDomainChallengePath; signal?: AbortSignal; }

export type GetPartnerDomainStatusPath = { "id": string; };
export type GetPartnerDomainStatusResult = { "data": PartnerDomainStatus; };
export interface GetPartnerDomainStatusInput { path: GetPartnerDomainStatusPath; signal?: AbortSignal; }

export type VerifyPartnerDomainChallengePath = { "id": string; };
export type VerifyPartnerDomainChallengeBody = { "reason": string; };
export type VerifyPartnerDomainChallengeResult = { "data": PartnerDomainChallenge; };
export interface VerifyPartnerDomainChallengeInput { path: VerifyPartnerDomainChallengePath; body: VerifyPartnerDomainChallengeBody; idempotencyKey: string; signal?: AbortSignal; }

export type ProvisionPartnerDomainChallengePath = { "id": string; };
export type ProvisionPartnerDomainChallengeBody = { "reason": string; };
export type ProvisionPartnerDomainChallengeResult = { "data": PartnerDomainChallenge; };
export interface ProvisionPartnerDomainChallengeInput { path: ProvisionPartnerDomainChallengePath; body: ProvisionPartnerDomainChallengeBody; idempotencyKey: string; signal?: AbortSignal; }

export type RevokePartnerDomainChallengePath = { "id": string; };
export type RevokePartnerDomainChallengeBody = { "reason": string; };
export type RevokePartnerDomainChallengeResult = { "data": PartnerDomainChallenge; };
export interface RevokePartnerDomainChallengeInput { path: RevokePartnerDomainChallengePath; body: RevokePartnerDomainChallengeBody; idempotencyKey: string; signal?: AbortSignal; }

export type PreparePartnerProposalPath = { "partnerId": string; };
export type PreparePartnerProposalBody = { "issuerOrganizationId": string; "proposal": ProposalWorkspaceInput; "requestExternalDelivery"?: boolean; "reason": string; };
export type PreparePartnerProposalResult = { "data": PartnerProposalPreparationResult; };
export interface PreparePartnerProposalInput { path: PreparePartnerProposalPath; body: PreparePartnerProposalBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type RevokePartnerTenantPath = { "id": string; };
export type RevokePartnerTenantBody = { "reason": string; };
export type RevokePartnerTenantResult = { "data": RecordEnvelope & { "payload": PartnerTenant; [key: string]: JsonValue | undefined; }; };
export interface RevokePartnerTenantInput { path: RevokePartnerTenantPath; body: RevokePartnerTenantBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListPartnerConsentsResult = { "data": Array<RecordEnvelope & { "payload": PartnerIssuerConsent; [key: string]: JsonValue | undefined; }>; };
export interface ListPartnerConsentsInput { signal?: AbortSignal; }

export type GrantPartnerConsentBody = PartnerConsentGrantRequest;
export type GrantPartnerConsentResult = { "data": RecordEnvelope & { "payload": PartnerIssuerConsent; [key: string]: JsonValue | undefined; }; };
export interface GrantPartnerConsentInput { body: GrantPartnerConsentBody; idempotencyKey: string; ifMatch?: string; signal?: AbortSignal; }

export type GetPartnerConsentPath = { "id": string; };
export type GetPartnerConsentResult = { "data": RecordEnvelope & { "payload": PartnerIssuerConsent; [key: string]: JsonValue | undefined; }; };
export interface GetPartnerConsentInput { path: GetPartnerConsentPath; signal?: AbortSignal; }

export type RevokePartnerConsentPath = { "id": string; };
export type RevokePartnerConsentBody = { "reason": string; };
export type RevokePartnerConsentResult = { "data": RecordEnvelope & { "payload": PartnerIssuerConsent; [key: string]: JsonValue | undefined; }; };
export interface RevokePartnerConsentInput { path: RevokePartnerConsentPath; body: RevokePartnerConsentBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListMarketMakerEvidencePath = { "id": string; };
export type ListMarketMakerEvidenceResult = { "data": Array<OperatingSystemEvent>; };
export interface ListMarketMakerEvidenceInput { path: ListMarketMakerEvidencePath; signal?: AbortSignal; }

export type IngestMarketMakerEvidencePath = { "id": string; };
export type IngestMarketMakerEvidenceBody = MarketMakerEvidenceRequest;
export type IngestMarketMakerEvidenceResult = { "data": MarketMakerEvidenceResult; };
export interface IngestMarketMakerEvidenceInput { path: IngestMarketMakerEvidencePath; body: IngestMarketMakerEvidenceBody; idempotencyKey: string; ifMatch: string; signal?: AbortSignal; }

export type ListOperatingSystemJobsResult = { "data": Array<OperatingSystemJob>; };
export interface ListOperatingSystemJobsInput { signal?: AbortSignal; }

export type GetPublicLiquidityPassportPath = { "slug": string; };
export type GetPublicLiquidityPassportResult = { "data": PublicPassportResult; };
export interface GetPublicLiquidityPassportInput { path: GetPublicLiquidityPassportPath; signal?: AbortSignal; }

export type DownloadPublicLiquidityPassportPath = { "slug": string; "format": "json" | "html" | "pdf" | "csv"; };
export type DownloadPublicLiquidityPassportResult = LiquidityPassport | Uint8Array;
export interface DownloadPublicLiquidityPassportInput { path: DownloadPublicLiquidityPassportPath; signal?: AbortSignal; }

export type DownloadLiquidityPassportVerificationBundlePath = { "slug": string; };
export type DownloadLiquidityPassportVerificationBundleResult = LiquidityPassportVerificationBundle;
export interface DownloadLiquidityPassportVerificationBundleInput { path: DownloadLiquidityPassportVerificationBundlePath; signal?: AbortSignal; }

export type GetSharedSimulationStudyPath = { "slug": string; };
export type GetSharedSimulationStudyResult = { "data": SharedSimulationStudy; };
export interface GetSharedSimulationStudyInput { path: GetSharedSimulationStudyPath; signal?: AbortSignal; }

export type GetVerifiedHostBrandResult = { "data": PublicPartnerBrand; };
export interface GetVerifiedHostBrandInput { signal?: AbortSignal; }

export type GetVerifiedPartnerBrandLogoPath = { "contentHash": string; };
export type GetVerifiedPartnerBrandLogoResult = Uint8Array;
export interface GetVerifiedPartnerBrandLogoInput { path: GetVerifiedPartnerBrandLogoPath; signal?: AbortSignal; }

interface InternalRequestInput {
  path?: Record<string, string | number>;
  query?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
  ifMatch?: string;
  idempotencyKey?: string;
  basicAuth?: { clientId: string; clientSecret: string };
  signal?: AbortSignal;
}

export interface LiquidityOsClientOptions {
  baseUrl: string;
  organizationId?: string;
  accessToken?: string;
  credentials?: RequestCredentials;
  fetch?: typeof globalThis.fetch;
  /** Observe response metadata without consuming the response body. */
  onResponse?: (response: Response) => void;
}

export class LiquidityOsApiError extends Error {
  constructor(readonly status: number, readonly code: string, message: string, readonly correlationId?: string, readonly body?: unknown, readonly retryAfter?: string, readonly retryable?: boolean) {
    super(message); this.name = 'LiquidityOsApiError';
  }
}

export class LiquidityOsClient {
  private readonly baseUrl: string;
  private readonly fetcher: typeof globalThis.fetch;
  constructor(private readonly options: LiquidityOsClientOptions) {
    const baseUrl = new URL(options.baseUrl);
    if (!['https:', 'http:'].includes(baseUrl.protocol) || baseUrl.username || baseUrl.password || baseUrl.href.includes('?') || baseUrl.href.includes('#')) {
      throw new TypeError('baseUrl must be an absolute HTTP(S) URL without credentials, query, or fragment');
    }
    this.baseUrl = baseUrl.href.replace(/\/+$/u, '');
    this.fetcher = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  /** Read current private Research proposal, clarification and linked study task */
  getResearchPlanning(input: GetResearchPlanningInput): Promise<GetResearchPlanningResult> {
    return this.request<GetResearchPlanningResult>("GET", "/agent-runs/{runId}/research-planning", input, undefined, "application/json");
  }

  /** Read current private Research child-study progress */
  getResearchProgress(input: GetResearchProgressInput): Promise<GetResearchProgressResult> {
    return this.request<GetResearchProgressResult>("GET", "/agent-runs/{runId}/research-progress", input, undefined, "application/json");
  }

  /** Inspect the exact immutable inputs of a private Research study */
  getResearchTrialInput(input: GetResearchTrialInputInput): Promise<GetResearchTrialInputResult> {
    return this.request<GetResearchTrialInputResult>("GET", "/agent-runs/{runId}/research-trials/{trialKey}", input, undefined, "application/json");
  }

  /** Read and revalidate a saved Health, Proposal Review or Research report */
  getAgentRunResult(input: GetAgentRunResultInput): Promise<GetAgentRunResultResult> {
    return this.request<GetAgentRunResultResult>("GET", "/agent-runs/{runId}/result", input, undefined, "application/json");
  }

  /** Read allowlisted fields from a sealed Health evidence record */
  getAgentRunEvidence(input: GetAgentRunEvidenceInput): Promise<GetAgentRunEvidenceResult> {
    return this.request<GetAgentRunEvidenceResult>("GET", "/agent-runs/{runId}/evidence/{evidenceId}", input, undefined, "application/json");
  }

  /** Cancel remaining work or answer a persisted clarification as its requester */
  applyAgentRunCommand(input: ApplyAgentRunCommandInput): Promise<ApplyAgentRunCommandResult> {
    return this.request<ApplyAgentRunCommandResult>("POST", "/agent-runs/{runId}/commands", input, "application/json", "application/json");
  }

  /** Admit a bounded Health, Proposal Review or Research task against an exact source version */
  startHealthAgentRun(input: StartHealthAgentRunInput): Promise<StartHealthAgentRunResult> {
    return this.request<StartHealthAgentRunResult>("POST", "/agent-runs", input, "application/json", "application/json");
  }

  /** Recover authorized agent task history */
  listAgentRuns(input?: ListAgentRunsInput): Promise<ListAgentRunsResult> {
    return this.request<ListAgentRunsResult>("GET", "/agent-runs", input ?? {}, undefined, "application/json");
  }

  /** Read persisted run status and pending clarification */
  getAgentRun(input: GetAgentRunInput): Promise<GetAgentRunResult> {
    return this.request<GetAgentRunResult>("GET", "/agent-runs/{runId}", input, undefined, "application/json");
  }

  /** Read recorded run and checkpoint transitions */
  listAgentRunEvents(input: ListAgentRunEventsInput): Promise<ListAgentRunEventsResult> {
    return this.request<ListAgentRunEventsResult>("GET", "/agent-runs/{runId}/events", input, undefined, "application/json");
  }

  /** Inspect a supported project using public market sources without a login, vault or payment */
  resolvePublicProject(input: ResolvePublicProjectInput): Promise<ResolvePublicProjectResult> {
    return this.request<ResolvePublicProjectResult>("POST", "/public/projects/resolve", input, "application/json", "application/json");
  }

  /** Inspect one bounded public reserve-scale liquidity question without a login or payment */
  investigatePublicProjectLiquidity(input: InvestigatePublicProjectLiquidityInput): Promise<InvestigatePublicProjectLiquidityResult> {
    return this.request<InvestigatePublicProjectLiquidityResult>("POST", "/public/projects/investigate", input, "application/json", "application/json");
  }

  /** List saved public-project bookmarks in the current workspace */
  listSavedProjects(input?: ListSavedProjectsInput): Promise<ListSavedProjectsResult> {
    return this.request<ListSavedProjectsResult>("GET", "/projects", input ?? {}, undefined, "application/json");
  }

  /** Save an independently resolved public-project observation */
  savePublicProject(input: SavePublicProjectInput): Promise<SavePublicProjectResult> {
    return this.request<SavePublicProjectResult>("POST", "/projects", input, "application/json", "application/json");
  }

  /** Read a saved public-project bookmark and its latest observation */
  getSavedProject(input: GetSavedProjectInput): Promise<GetSavedProjectResult> {
    return this.request<GetSavedProjectResult>("GET", "/projects/{projectId}", input, undefined, "application/json");
  }

  /** Append a newly resolved public observation to the exact saved project version */
  refreshSavedProject(input: RefreshSavedProjectInput): Promise<RefreshSavedProjectResult> {
    return this.request<RefreshSavedProjectResult>("POST", "/projects/{projectId}/refresh", input, "application/json", "application/json");
  }

  /** List immutable observation metadata without changing captured evidence */
  listSavedProjectObservations(input: ListSavedProjectObservationsInput): Promise<ListSavedProjectObservationsResult> {
    return this.request<ListSavedProjectObservationsResult>("GET", "/projects/{projectId}/observations", input, undefined, "application/json");
  }

  /** Read the exact immutable public observation version */
  getSavedProjectObservation(input: GetSavedProjectObservationInput): Promise<GetSavedProjectObservationResult> {
    return this.request<GetSavedProjectObservationResult>("GET", "/projects/{projectId}/observations/{version}", input, undefined, "application/json");
  }

  /** Inspect configured workspace plan previews without a login or payment */
  listWorkspacePlans(input?: ListWorkspacePlansInput): Promise<ListWorkspacePlansResult> {
    return this.request<ListWorkspacePlansResult>("GET", "/public/plans", input ?? {}, undefined, "application/json");
  }

  /** Inspect the configured ACP public-analysis offering without a login or payment */
  getPublicAcpOffering(input?: GetPublicAcpOfferingInput): Promise<GetPublicAcpOfferingResult> {
    return this.request<GetPublicAcpOfferingResult>("GET", "/public/acp/offering", input ?? {}, undefined, "application/json");
  }

  /** Prepare a private historical treasury scenario review with its exact project evidence */
  createTreasuryDecisionPack(input: CreateTreasuryDecisionPackInput): Promise<CreateTreasuryDecisionPackResult> {
    return this.request<CreateTreasuryDecisionPackResult>("POST", "/decision-packs/from-treasury", input, "application/json", "application/json");
  }

  /** Prepare a private review candidate from an exact Research result */
  createResearchDecisionPack(input: CreateResearchDecisionPackInput): Promise<CreateResearchDecisionPackResult> {
    return this.request<CreateResearchDecisionPackResult>("POST", "/decision-packs/from-research", input, "application/json", "application/json");
  }

  /** List private analysis Decision Packs */
  listDecisionPacks(input?: ListDecisionPacksInput): Promise<ListDecisionPacksResult> {
    return this.request<ListDecisionPacksResult>("GET", "/decision-packs", input ?? {}, undefined, "application/json");
  }

  /** Create a draft bound to a saved public-project observation */
  createDecisionPack(input: CreateDecisionPackInput): Promise<CreateDecisionPackResult> {
    return this.request<CreateDecisionPackResult>("POST", "/decision-packs", input, "application/json", "application/json");
  }

  /** Read the latest Decision Pack version */
  getDecisionPack(input: GetDecisionPackInput): Promise<GetDecisionPackResult> {
    return this.request<GetDecisionPackResult>("GET", "/decision-packs/{packId}", input, undefined, "application/json");
  }

  /** List immutable Decision Pack version metadata */
  listDecisionPackVersions(input: ListDecisionPackVersionsInput): Promise<ListDecisionPackVersionsResult> {
    return this.request<ListDecisionPackVersionsResult>("GET", "/decision-packs/{packId}/versions", input, undefined, "application/json");
  }

  /** Read an exact historical Decision Pack version */
  getDecisionPackVersion(input: GetDecisionPackVersionInput): Promise<GetDecisionPackVersionResult> {
    return this.request<GetDecisionPackVersionResult>("GET", "/decision-packs/{packId}/versions/{sequence}", input, undefined, "application/json");
  }

  /** Append a versioned human review action to an exact pack version */
  applyDecisionPackCommand(input: ApplyDecisionPackCommandInput): Promise<ApplyDecisionPackCommandResult> {
    return this.request<ApplyDecisionPackCommandResult>("POST", "/decision-packs/{packId}/commands", input, "application/json", "application/json");
  }

  /** listTreasuryCustodyEvidence */
  listTreasuryCustodyEvidence(input?: ListTreasuryCustodyEvidenceInput): Promise<ListTreasuryCustodyEvidenceResult> {
    return this.request<ListTreasuryCustodyEvidenceResult>("GET", "/treasury/custody-evidence", input ?? {}, undefined, "application/json");
  }

  /** admitTreasuryCustodyEvidence */
  admitTreasuryCustodyEvidence(input: AdmitTreasuryCustodyEvidenceInput): Promise<AdmitTreasuryCustodyEvidenceResult> {
    return this.request<AdmitTreasuryCustodyEvidenceResult>("POST", "/treasury/custody-evidence", input, "application/json", "application/json");
  }

  /** getTreasuryCustodyEvidence */
  getTreasuryCustodyEvidence(input: GetTreasuryCustodyEvidenceInput): Promise<GetTreasuryCustodyEvidenceResult> {
    return this.request<GetTreasuryCustodyEvidenceResult>("GET", "/treasury/custody-evidence/{evidenceId}", input, undefined, "application/json");
  }

  /** issueProjectControlChallenge */
  issueProjectControlChallenge(input: IssueProjectControlChallengeInput): Promise<IssueProjectControlChallengeResult> {
    return this.request<IssueProjectControlChallengeResult>("POST", "/treasury/project-control/challenges", input, "application/json", "application/json");
  }

  /** getProjectControlChallenge */
  getProjectControlChallenge(input: GetProjectControlChallengeInput): Promise<GetProjectControlChallengeResult> {
    return this.request<GetProjectControlChallengeResult>("GET", "/treasury/project-control/challenges/{nonce}", input, undefined, "application/json");
  }

  /** acceptProjectControlProof */
  acceptProjectControlProof(input: AcceptProjectControlProofInput): Promise<AcceptProjectControlProofResult> {
    return this.request<AcceptProjectControlProofResult>("POST", "/treasury/project-control/proofs", input, "application/json", "application/json");
  }

  /** previewTreasuryReconciliation */
  previewTreasuryReconciliation(input: PreviewTreasuryReconciliationInput): Promise<PreviewTreasuryReconciliationResult> {
    return this.request<PreviewTreasuryReconciliationResult>("POST", "/treasury/reconciliation-preview", input, "application/json", "application/json");
  }

  /** listTreasuryReconciliations */
  listTreasuryReconciliations(input?: ListTreasuryReconciliationsInput): Promise<ListTreasuryReconciliationsResult> {
    return this.request<ListTreasuryReconciliationsResult>("GET", "/treasury/reconciliations", input ?? {}, undefined, "application/json");
  }

  /** createTreasuryReconciliation */
  createTreasuryReconciliation(input: CreateTreasuryReconciliationInput): Promise<CreateTreasuryReconciliationResult> {
    return this.request<CreateTreasuryReconciliationResult>("POST", "/treasury/reconciliations", input, "application/json", "application/json");
  }

  /** getTreasuryReconciliation */
  getTreasuryReconciliation(input: GetTreasuryReconciliationInput): Promise<GetTreasuryReconciliationResult> {
    return this.request<GetTreasuryReconciliationResult>("GET", "/treasury/reconciliations/{id}", input, undefined, "application/json");
  }

  /** listTreasuryReconciliationVersions */
  listTreasuryReconciliationVersions(input: ListTreasuryReconciliationVersionsInput): Promise<ListTreasuryReconciliationVersionsResult> {
    return this.request<ListTreasuryReconciliationVersionsResult>("GET", "/treasury/reconciliations/{id}/versions", input, undefined, "application/json");
  }

  /** getTreasuryReconciliationVersion */
  getTreasuryReconciliationVersion(input: GetTreasuryReconciliationVersionInput): Promise<GetTreasuryReconciliationVersionResult> {
    return this.request<GetTreasuryReconciliationVersionResult>("GET", "/treasury/reconciliations/{id}/versions/{sequence}", input, undefined, "application/json");
  }

  /** acknowledgeTreasuryReconciliation */
  acknowledgeTreasuryReconciliation(input: AcknowledgeTreasuryReconciliationInput): Promise<AcknowledgeTreasuryReconciliationResult> {
    return this.request<AcknowledgeTreasuryReconciliationResult>("POST", "/treasury/reconciliations/{id}/acknowledge", input, "application/json", "application/json");
  }

  /** listTreasuryAssumptions */
  listTreasuryAssumptions(input?: ListTreasuryAssumptionsInput): Promise<ListTreasuryAssumptionsResult> {
    return this.request<ListTreasuryAssumptionsResult>("GET", "/treasury/assumptions", input ?? {}, undefined, "application/json");
  }

  /** createTreasuryAssumptions */
  createTreasuryAssumptions(input: CreateTreasuryAssumptionsInput): Promise<CreateTreasuryAssumptionsResult> {
    return this.request<CreateTreasuryAssumptionsResult>("POST", "/treasury/assumptions", input, "application/json", "application/json");
  }

  /** getTreasuryAssumptions */
  getTreasuryAssumptions(input: GetTreasuryAssumptionsInput): Promise<GetTreasuryAssumptionsResult> {
    return this.request<GetTreasuryAssumptionsResult>("GET", "/treasury/assumptions/{id}", input, undefined, "application/json");
  }

  /** listTreasuryAssumptionsVersions */
  listTreasuryAssumptionsVersions(input: ListTreasuryAssumptionsVersionsInput): Promise<ListTreasuryAssumptionsVersionsResult> {
    return this.request<ListTreasuryAssumptionsVersionsResult>("GET", "/treasury/assumptions/{id}/versions", input, undefined, "application/json");
  }

  /** getTreasuryAssumptionsVersion */
  getTreasuryAssumptionsVersion(input: GetTreasuryAssumptionsVersionInput): Promise<GetTreasuryAssumptionsVersionResult> {
    return this.request<GetTreasuryAssumptionsVersionResult>("GET", "/treasury/assumptions/{id}/versions/{sequence}", input, undefined, "application/json");
  }

  /** reviseTreasuryAssumptions */
  reviseTreasuryAssumptions(input: ReviseTreasuryAssumptionsInput): Promise<ReviseTreasuryAssumptionsResult> {
    return this.request<ReviseTreasuryAssumptionsResult>("POST", "/treasury/assumptions/{id}/revisions", input, "application/json", "application/json");
  }

  /** listTreasuryProjections */
  listTreasuryProjections(input?: ListTreasuryProjectionsInput): Promise<ListTreasuryProjectionsResult> {
    return this.request<ListTreasuryProjectionsResult>("GET", "/treasury/projections", input ?? {}, undefined, "application/json");
  }

  /** createTreasuryProjection */
  createTreasuryProjection(input: CreateTreasuryProjectionInput): Promise<CreateTreasuryProjectionResult> {
    return this.request<CreateTreasuryProjectionResult>("POST", "/treasury/projections", input, "application/json", "application/json");
  }

  /** getTreasuryProjection */
  getTreasuryProjection(input: GetTreasuryProjectionInput): Promise<GetTreasuryProjectionResult> {
    return this.request<GetTreasuryProjectionResult>("GET", "/treasury/projections/{id}", input, undefined, "application/json");
  }

  /** Search supported public Virtuals project identities */
  searchDiscoveredProjects(input: SearchDiscoveredProjectsInput): Promise<SearchDiscoveredProjectsResult> {
    return this.request<SearchDiscoveredProjectsResult>("GET", "/public/discovery/search", input, undefined, "application/json");
  }

  /** Read provider-reported project pools and market figures */
  getDiscoveredProjectMarket(input: GetDiscoveredProjectMarketInput): Promise<GetDiscoveredProjectMarketResult> {
    return this.request<GetDiscoveredProjectMarketResult>("GET", "/public/discovery/market/{id}", input, undefined, "application/json");
  }

  /** Read configured research capability availability */
  getMarketDiscoveryCapabilities(input?: GetMarketDiscoveryCapabilitiesInput): Promise<GetMarketDiscoveryCapabilitiesResult> {
    return this.request<GetMarketDiscoveryCapabilitiesResult>("GET", "/public/discovery/capabilities", input ?? {}, undefined, "application/json");
  }

  /** List authorized vault choices and saved-research availability */
  getWorkflowContext(input?: GetWorkflowContextInput): Promise<GetWorkflowContextResult> {
    return this.request<GetWorkflowContextResult>("GET", "/workflows/context", input ?? {}, undefined, "application/json");
  }

  /** List completed research saved for the current workspace and reader */
  listCompletedWorkflowRuns(input?: ListCompletedWorkflowRunsInput): Promise<ListCompletedWorkflowRunsResult> {
    return this.request<ListCompletedWorkflowRunsResult>("GET", "/workflows/runs", input ?? {}, undefined, "application/json");
  }

  /** Read one immutable research result saved for the current reader */
  getCompletedWorkflowRun(input: GetCompletedWorkflowRunInput): Promise<GetCompletedWorkflowRunResult> {
    return this.request<GetCompletedWorkflowRunResult>("GET", "/workflows/runs/{id}", input, undefined, "application/json");
  }

  /** Complete a bounded read-only liquidity research question */
  runWorkflowResearch(input: RunWorkflowResearchInput): Promise<RunWorkflowResearchResult> {
    return this.request<RunWorkflowResearchResult>("POST", "/workflows/run", input, "application/json", "application/json");
  }

  /** List workspace Virtuals directory bookmarks */
  listSavedVirtualsProjects(input?: ListSavedVirtualsProjectsInput): Promise<ListSavedVirtualsProjectsResult> {
    return this.request<ListSavedVirtualsProjectsResult>("GET", "/virtuals-projects", input ?? {}, undefined, "application/json");
  }

  /** Save an independently resolved Virtuals directory bookmark */
  saveVirtualsProject(input: SaveVirtualsProjectInput): Promise<SaveVirtualsProjectResult> {
    return this.request<SaveVirtualsProjectResult>("POST", "/virtuals-projects", input, "application/json", "application/json");
  }

  /** Read a workspace Virtuals directory bookmark */
  getSavedVirtualsProject(input: GetSavedVirtualsProjectInput): Promise<GetSavedVirtualsProjectResult> {
    return this.request<GetSavedVirtualsProjectResult>("GET", "/virtuals-projects/{id}", input, undefined, "application/json");
  }

  /** Remove the exact reviewed Virtuals directory bookmark generation */
  removeSavedVirtualsProject(input: RemoveSavedVirtualsProjectInput): Promise<RemoveSavedVirtualsProjectResult> {
    return this.request<RemoveSavedVirtualsProjectResult>("DELETE", "/virtuals-projects/{id}", input, "application/json", "application/json");
  }

  /** List immutable versions of a treasury ledger entry */
  listTreasuryLedgerEntryVersions(input: ListTreasuryLedgerEntryVersionsInput): Promise<ListTreasuryLedgerEntryVersionsResult> {
    return this.request<ListTreasuryLedgerEntryVersionsResult>("GET", "/treasury-entries/{id}/versions", input, undefined, "application/json");
  }

  /** Read a resource-version-bound proposal review snapshot */
  getProposalWorkspaceReview(input: GetProposalWorkspaceReviewInput): Promise<GetProposalWorkspaceReviewResult> {
    return this.request<GetProposalWorkspaceReviewResult>("GET", "/proposals/{id}/review", input, undefined, "application/json");
  }

  /** List issuer intents */
  listIntents(input?: ListIntentsInput): Promise<ListIntentsResult> {
    return this.request<ListIntentsResult>("GET", "/intents", input ?? {}, undefined, "application/json");
  }

  /** Create issuer intents */
  createIntents(input: CreateIntentsInput): Promise<CreateIntentsResult> {
    return this.request<CreateIntentsResult>("POST", "/intents", input, "application/json", "application/json");
  }

  /** Get one issuer intents aggregate */
  getIntents(input: GetIntentsInput): Promise<GetIntentsResult> {
    return this.request<GetIntentsResult>("GET", "/intents/{id}", input, undefined, "application/json");
  }

  /** Supersede an intent and recompute immutable deterministic capital evidence */
  supersedeIntents(input: SupersedeIntentsInput): Promise<SupersedeIntentsResult> {
    return this.request<SupersedeIntentsResult>("PATCH", "/intents/{id}", input, "application/json", "application/json");
  }

  /** List simulation studies */
  listStudies(input?: ListStudiesInput): Promise<ListStudiesResult> {
    return this.request<ListStudiesResult>("GET", "/studies", input ?? {}, undefined, "application/json");
  }

  /** Create simulation studies */
  createStudies(input: CreateStudiesInput): Promise<CreateStudiesResult> {
    return this.request<CreateStudiesResult>("POST", "/studies", input, "application/json", "application/json");
  }

  /** Get one simulation studies aggregate */
  getStudies(input: GetStudiesInput): Promise<GetStudiesResult> {
    return this.request<GetStudiesResult>("GET", "/studies/{id}", input, undefined, "application/json");
  }

  /** List revocable simulation-study shares */
  listStudyShares(input?: ListStudySharesInput): Promise<ListStudySharesResult> {
    return this.request<ListStudySharesResult>("GET", "/study-shares", input ?? {}, undefined, "application/json");
  }

  /** Get one revocable simulation-study shares aggregate */
  getStudyShares(input: GetStudySharesInput): Promise<GetStudySharesResult> {
    return this.request<GetStudySharesResult>("GET", "/study-shares/{id}", input, undefined, "application/json");
  }

  /** List strategy definitions */
  listStrategies(input?: ListStrategiesInput): Promise<ListStrategiesResult> {
    return this.request<ListStrategiesResult>("GET", "/strategies", input ?? {}, undefined, "application/json");
  }

  /** Create strategy definitions */
  createStrategies(input: CreateStrategiesInput): Promise<CreateStrategiesResult> {
    return this.request<CreateStrategiesResult>("POST", "/strategies", input, "application/json", "application/json");
  }

  /** Get one strategy definitions aggregate */
  getStrategies(input: GetStrategiesInput): Promise<GetStrategiesResult> {
    return this.request<GetStrategiesResult>("GET", "/strategies/{id}", input, undefined, "application/json");
  }

  /** Supersede a declarative strategy only after deterministic compilation */
  supersedeStrategies(input: SupersedeStrategiesInput): Promise<SupersedeStrategiesResult> {
    return this.request<SupersedeStrategiesResult>("PATCH", "/strategies/{id}", input, "application/json", "application/json");
  }

  /** List decision workspaces */
  listProposals(input?: ListProposalsInput): Promise<ListProposalsResult> {
    return this.request<ListProposalsResult>("GET", "/proposals", input ?? {}, undefined, "application/json");
  }

  /** Create a decision packet with zero server-recorded approvals */
  createProposals(input: CreateProposalsInput): Promise<CreateProposalsResult> {
    return this.request<CreateProposalsResult>("POST", "/proposals", input, "application/json", "application/json");
  }

  /** Get one decision workspaces aggregate */
  getProposals(input: GetProposalsInput): Promise<GetProposalsResult> {
    return this.request<GetProposalsResult>("GET", "/proposals/{id}", input, undefined, "application/json");
  }

  /** List launch plans */
  listLaunchPlans(input?: ListLaunchPlansInput): Promise<ListLaunchPlansResult> {
    return this.request<ListLaunchPlansResult>("GET", "/launch-plans", input ?? {}, undefined, "application/json");
  }

  /** Create launch plans */
  createLaunchPlans(input: CreateLaunchPlansInput): Promise<CreateLaunchPlansResult> {
    return this.request<CreateLaunchPlansResult>("POST", "/launch-plans", input, "application/json", "application/json");
  }

  /** Get one launch plans aggregate */
  getLaunchPlans(input: GetLaunchPlansInput): Promise<GetLaunchPlansResult> {
    return this.request<GetLaunchPlansResult>("GET", "/launch-plans/{id}", input, undefined, "application/json");
  }

  /** List unlock impact studies */
  listUnlockImpacts(input?: ListUnlockImpactsInput): Promise<ListUnlockImpactsResult> {
    return this.request<ListUnlockImpactsResult>("GET", "/unlock-impacts", input ?? {}, undefined, "application/json");
  }

  /** Create a correlation-aware unlock study and queue four explicit downstream materializations */
  createUnlockImpacts(input: CreateUnlockImpactsInput): Promise<CreateUnlockImpactsResult> {
    return this.request<CreateUnlockImpactsResult>("POST", "/unlock-impacts", input, "application/json", "application/json");
  }

  /** Get one unlock impact studies aggregate */
  getUnlockImpacts(input: GetUnlockImpactsInput): Promise<GetUnlockImpactsResult> {
    return this.request<GetUnlockImpactsResult>("GET", "/unlock-impacts/{id}", input, undefined, "application/json");
  }

  /** List market quality scores */
  listScores(input?: ListScoresInput): Promise<ListScoresResult> {
    return this.request<ListScoresResult>("GET", "/scores", input ?? {}, undefined, "application/json");
  }

  /** Create market quality scores */
  createScores(input: CreateScoresInput): Promise<CreateScoresResult> {
    return this.request<CreateScoresResult>("POST", "/scores", input, "application/json", "application/json");
  }

  /** Get one market quality scores aggregate */
  getScores(input: GetScoresInput): Promise<GetScoresResult> {
    return this.request<GetScoresResult>("GET", "/scores/{id}", input, undefined, "application/json");
  }

  /** List execution attributions */
  listAttributions(input?: ListAttributionsInput): Promise<ListAttributionsResult> {
    return this.request<ListAttributionsResult>("GET", "/attributions", input ?? {}, undefined, "application/json");
  }

  /** Create execution attributions */
  createAttributions(input: CreateAttributionsInput): Promise<CreateAttributionsResult> {
    return this.request<CreateAttributionsResult>("POST", "/attributions", input, "application/json", "application/json");
  }

  /** Get one execution attributions aggregate */
  getAttributions(input: GetAttributionsInput): Promise<GetAttributionsResult> {
    return this.request<GetAttributionsResult>("GET", "/attributions/{id}", input, undefined, "application/json");
  }

  /** List anomalies */
  listAnomalies(input?: ListAnomaliesInput): Promise<ListAnomaliesResult> {
    return this.request<ListAnomaliesResult>("GET", "/anomalies", input ?? {}, undefined, "application/json");
  }

  /** Create anomalies */
  createAnomalies(input: CreateAnomaliesInput): Promise<CreateAnomaliesResult> {
    return this.request<CreateAnomaliesResult>("POST", "/anomalies", input, "application/json", "application/json");
  }

  /** Get one anomalies aggregate */
  getAnomalies(input: GetAnomaliesInput): Promise<GetAnomaliesResult> {
    return this.request<GetAnomaliesResult>("GET", "/anomalies/{id}", input, undefined, "application/json");
  }

  /** List treasury ledger entries */
  listTreasuryEntries(input?: ListTreasuryEntriesInput): Promise<ListTreasuryEntriesResult> {
    return this.request<ListTreasuryEntriesResult>("GET", "/treasury-entries", input ?? {}, undefined, "application/json");
  }

  /** Append a fresh signed oracle-bound economic capital container */
  createTreasuryEntries(input: CreateTreasuryEntriesInput): Promise<CreateTreasuryEntriesResult> {
    return this.request<CreateTreasuryEntriesResult>("POST", "/treasury-entries", input, "application/json", "application/json");
  }

  /** Get one treasury ledger entries aggregate */
  getTreasuryEntries(input: GetTreasuryEntriesInput): Promise<GetTreasuryEntriesResult> {
    return this.request<GetTreasuryEntriesResult>("GET", "/treasury-entries/{id}", input, undefined, "application/json");
  }

  /** List capital requirement studies */
  listCapitalRequirements(input?: ListCapitalRequirementsInput): Promise<ListCapitalRequirementsResult> {
    return this.request<ListCapitalRequirementsResult>("GET", "/capital-requirements", input ?? {}, undefined, "application/json");
  }

  /** Create capital requirement studies */
  createCapitalRequirements(input: CreateCapitalRequirementsInput): Promise<CreateCapitalRequirementsResult> {
    return this.request<CreateCapitalRequirementsResult>("POST", "/capital-requirements", input, "application/json", "application/json");
  }

  /** Get one capital requirement studies aggregate */
  getCapitalRequirements(input: GetCapitalRequirementsInput): Promise<GetCapitalRequirementsResult> {
    return this.request<GetCapitalRequirementsResult>("GET", "/capital-requirements/{id}", input, undefined, "application/json");
  }

  /** List treasury stress studies */
  listTreasuryStressTests(input?: ListTreasuryStressTestsInput): Promise<ListTreasuryStressTestsResult> {
    return this.request<ListTreasuryStressTestsResult>("GET", "/treasury-stress-tests", input ?? {}, undefined, "application/json");
  }

  /** Run all seven deterministic shocks using the server-side ledger, launch unlocks, and current policy */
  createTreasuryStressTests(input: CreateTreasuryStressTestsInput): Promise<CreateTreasuryStressTestsResult> {
    return this.request<CreateTreasuryStressTestsResult>("POST", "/treasury-stress-tests", input, "application/json", "application/json");
  }

  /** Get one treasury stress studies aggregate */
  getTreasuryStressTests(input: GetTreasuryStressTestsInput): Promise<GetTreasuryStressTestsResult> {
    return this.request<GetTreasuryStressTestsResult>("GET", "/treasury-stress-tests/{id}", input, undefined, "application/json");
  }

  /** List venue profiles */
  listVenues(input?: ListVenuesInput): Promise<ListVenuesResult> {
    return this.request<ListVenuesResult>("GET", "/venues", input ?? {}, undefined, "application/json");
  }

  /** Create venue profiles */
  createVenues(input: CreateVenuesInput): Promise<CreateVenuesResult> {
    return this.request<CreateVenuesResult>("POST", "/venues", input, "application/json", "application/json");
  }

  /** Get one venue profiles aggregate */
  getVenues(input: GetVenuesInput): Promise<GetVenuesResult> {
    return this.request<GetVenuesResult>("GET", "/venues/{id}", input, undefined, "application/json");
  }

  /** Supersede validation-only read-profile metadata; write adapters require a separate signed release */
  supersedeVenues(input: SupersedeVenuesInput): Promise<SupersedeVenuesResult> {
    return this.request<SupersedeVenuesResult>("PATCH", "/venues/{id}", input, "application/json", "application/json");
  }

  /** List venue observations */
  listVenueObservations(input?: ListVenueObservationsInput): Promise<ListVenueObservationsResult> {
    return this.request<ListVenueObservationsResult>("GET", "/venue-observations", input ?? {}, undefined, "application/json");
  }

  /** Get one venue observations aggregate */
  getVenueObservations(input: GetVenueObservationsInput): Promise<GetVenueObservationsResult> {
    return this.request<GetVenueObservationsResult>("GET", "/venue-observations/{id}", input, undefined, "application/json");
  }

  /** List multi-venue allocation plans */
  listAllocationPlans(input?: ListAllocationPlansInput): Promise<ListAllocationPlansResult> {
    return this.request<ListAllocationPlansResult>("GET", "/allocation-plans", input ?? {}, undefined, "application/json");
  }

  /** Create multi-venue allocation plans */
  createAllocationPlans(input: CreateAllocationPlansInput): Promise<CreateAllocationPlansResult> {
    return this.request<CreateAllocationPlansResult>("POST", "/allocation-plans", input, "application/json", "application/json");
  }

  /** Get one multi-venue allocation plans aggregate */
  getAllocationPlans(input: GetAllocationPlansInput): Promise<GetAllocationPlansResult> {
    return this.request<GetAllocationPlansResult>("GET", "/allocation-plans/{id}", input, undefined, "application/json");
  }

  /** List liquidity migration plans */
  listMigrationPlans(input?: ListMigrationPlansInput): Promise<ListMigrationPlansResult> {
    return this.request<ListMigrationPlansResult>("GET", "/migration-plans", input ?? {}, undefined, "application/json");
  }

  /** Create liquidity migration plans */
  createMigrationPlans(input: CreateMigrationPlansInput): Promise<CreateMigrationPlansResult> {
    return this.request<CreateMigrationPlansResult>("POST", "/migration-plans", input, "application/json", "application/json");
  }

  /** Get one liquidity migration plans aggregate */
  getMigrationPlans(input: GetMigrationPlansInput): Promise<GetMigrationPlansResult> {
    return this.request<GetMigrationPlansResult>("GET", "/migration-plans/{id}", input, undefined, "application/json");
  }

  /** List autonomy policies */
  listAutonomyPolicies(input?: ListAutonomyPoliciesInput): Promise<ListAutonomyPoliciesResult> {
    return this.request<ListAutonomyPoliciesResult>("GET", "/autonomy-policies", input ?? {}, undefined, "application/json");
  }

  /** Create or expand autonomy using server-reconciled exact v2 Safe-envelope evidence */
  createAutonomyPolicies(input: CreateAutonomyPoliciesInput): Promise<CreateAutonomyPoliciesResult> {
    return this.request<CreateAutonomyPoliciesResult>("POST", "/autonomy-policies", input, "application/json", "application/json");
  }

  /** Get one autonomy policies aggregate */
  getAutonomyPolicies(input: GetAutonomyPoliciesInput): Promise<GetAutonomyPoliciesResult> {
    return this.request<GetAutonomyPoliciesResult>("GET", "/autonomy-policies/{id}", input, undefined, "application/json");
  }

  /** Immediately pause, revoke, or narrow policy authority; expansion uses the typed Safe workflow */
  supersedeAutonomyPolicies(input: SupersedeAutonomyPoliciesInput): Promise<SupersedeAutonomyPoliciesResult> {
    return this.request<SupersedeAutonomyPoliciesResult>("PATCH", "/autonomy-policies/{id}", input, "application/json", "application/json");
  }

  /** List natural-language policy drafts */
  listPolicyIntentDrafts(input?: ListPolicyIntentDraftsInput): Promise<ListPolicyIntentDraftsResult> {
    return this.request<ListPolicyIntentDraftsResult>("GET", "/policy-intent-drafts", input ?? {}, undefined, "application/json");
  }

  /** Create natural-language policy drafts */
  createPolicyIntentDrafts(input: CreatePolicyIntentDraftsInput): Promise<CreatePolicyIntentDraftsResult> {
    return this.request<CreatePolicyIntentDraftsResult>("POST", "/policy-intent-drafts", input, "application/json", "application/json");
  }

  /** Get one natural-language policy drafts aggregate */
  getPolicyIntentDrafts(input: GetPolicyIntentDraftsInput): Promise<GetPolicyIntentDraftsResult> {
    return this.request<GetPolicyIntentDraftsResult>("GET", "/policy-intent-drafts/{id}", input, undefined, "application/json");
  }

  /** List protected execution quote sets */
  listQuoteSets(input?: ListQuoteSetsInput): Promise<ListQuoteSetsResult> {
    return this.request<ListQuoteSetsResult>("GET", "/quote-sets", input ?? {}, undefined, "application/json");
  }

  /** Append signed provider quotes to an immutable policy-bound quote request */
  admitProtectedExecutionQuoteSet(input: AdmitProtectedExecutionQuoteSetInput): Promise<AdmitProtectedExecutionQuoteSetResult> {
    return this.request<AdmitProtectedExecutionQuoteSetResult>("POST", "/quote-sets", input, "application/json", "application/json");
  }

  /** Get one protected execution quote sets aggregate */
  getQuoteSets(input: GetQuoteSetsInput): Promise<GetQuoteSetsResult> {
    return this.request<GetQuoteSetsResult>("GET", "/quote-sets/{id}", input, undefined, "application/json");
  }

  /** List protected execution plans */
  listProtectedExecutionPlans(input?: ListProtectedExecutionPlansInput): Promise<ListProtectedExecutionPlansResult> {
    return this.request<ListProtectedExecutionPlansResult>("GET", "/protected-execution-plans", input ?? {}, undefined, "application/json");
  }

  /** Prepare typed child legs under the quote request current immutable policy binding */
  prepareProtectedExecutionPlan(input: PrepareProtectedExecutionPlanInput): Promise<PrepareProtectedExecutionPlanResult> {
    return this.request<PrepareProtectedExecutionPlanResult>("POST", "/protected-execution-plans", input, "application/json", "application/json");
  }

  /** Get one protected execution plans aggregate */
  getProtectedExecutionPlans(input: GetProtectedExecutionPlansInput): Promise<GetProtectedExecutionPlansResult> {
    return this.request<GetProtectedExecutionPlansResult>("GET", "/protected-execution-plans/{id}", input, undefined, "application/json");
  }

  /** List developer credentials */
  listDeveloperCredentials(input?: ListDeveloperCredentialsInput): Promise<ListDeveloperCredentialsResult> {
    return this.request<ListDeveloperCredentialsResult>("GET", "/developer-credentials", input ?? {}, undefined, "application/json");
  }

  /** Create a hashed developer credential and return its secret once */
  createDeveloperCredentials(input: CreateDeveloperCredentialsInput): Promise<CreateDeveloperCredentialsResult> {
    return this.request<CreateDeveloperCredentialsResult>("POST", "/developer-credentials", input, "application/json", "application/json");
  }

  /** Get one developer credentials aggregate */
  getDeveloperCredentials(input: GetDeveloperCredentialsInput): Promise<GetDeveloperCredentialsResult> {
    return this.request<GetDeveloperCredentialsResult>("GET", "/developer-credentials/{id}", input, undefined, "application/json");
  }

  /** Immediately revoke a developer credential */
  supersedeDeveloperCredentials(input: SupersedeDeveloperCredentialsInput): Promise<SupersedeDeveloperCredentialsResult> {
    return this.request<SupersedeDeveloperCredentialsResult>("PATCH", "/developer-credentials/{id}", input, "application/json", "application/json");
  }

  /** List webhook subscriptions */
  listWebhooks(input?: ListWebhooksInput): Promise<ListWebhooksResult> {
    return this.request<ListWebhooksResult>("GET", "/webhooks", input ?? {}, undefined, "application/json");
  }

  /** Create a signed webhook and return its signing secret once */
  createWebhooks(input: CreateWebhooksInput): Promise<CreateWebhooksResult> {
    return this.request<CreateWebhooksResult>("POST", "/webhooks", input, "application/json", "application/json");
  }

  /** Get one webhook subscriptions aggregate */
  getWebhooks(input: GetWebhooksInput): Promise<GetWebhooksResult> {
    return this.request<GetWebhooksResult>("GET", "/webhooks/{id}", input, undefined, "application/json");
  }

  /** Immediately pause or revoke a webhook subscription */
  supersedeWebhooks(input: SupersedeWebhooksInput): Promise<SupersedeWebhooksResult> {
    return this.request<SupersedeWebhooksResult>("PATCH", "/webhooks/{id}", input, "application/json", "application/json");
  }

  /** List curated strategy packages */
  listStrategyPackages(input?: ListStrategyPackagesInput): Promise<ListStrategyPackagesResult> {
    return this.request<ListStrategyPackagesResult>("GET", "/strategy-packages", input ?? {}, undefined, "application/json");
  }

  /** Create an immutable declarative candidate restricted to Digital Twin use */
  createStrategyPackageCandidate(input: CreateStrategyPackageCandidateInput): Promise<CreateStrategyPackageCandidateResult> {
    return this.request<CreateStrategyPackageCandidateResult>("POST", "/strategy-packages", input, "application/json", "application/json");
  }

  /** Get one curated strategy packages aggregate */
  getStrategyPackages(input: GetStrategyPackagesInput): Promise<GetStrategyPackagesResult> {
    return this.request<GetStrategyPackagesResult>("GET", "/strategy-packages/{id}", input, undefined, "application/json");
  }

  /** List white-label partner tenants */
  listPartners(input?: ListPartnersInput): Promise<ListPartnersResult> {
    return this.request<ListPartnersResult>("GET", "/partners", input ?? {}, undefined, "application/json");
  }

  /** Bind brand configuration to fresh signed exact-domain verifier evidence */
  createVerifiedPartnerTenant(input: CreateVerifiedPartnerTenantInput): Promise<CreateVerifiedPartnerTenantResult> {
    return this.request<CreateVerifiedPartnerTenantResult>("POST", "/partners", input, "application/json", "application/json");
  }

  /** Get one white-label partner tenants aggregate */
  getPartners(input: GetPartnersInput): Promise<GetPartnersResult> {
    return this.request<GetPartnersResult>("GET", "/partners/{id}", input, undefined, "application/json");
  }

  /** Append an explicitly reviewed partner generation after current domain verification */
  updatePartnerConfiguration(input: UpdatePartnerConfigurationInput): Promise<UpdatePartnerConfigurationResult> {
    return this.request<UpdatePartnerConfigurationResult>("PATCH", "/partners/{id}", input, "application/json", "application/json");
  }

  /** List market-maker mandates */
  listMarketMakerMandates(input?: ListMarketMakerMandatesInput): Promise<ListMarketMakerMandatesResult> {
    return this.request<ListMarketMakerMandatesResult>("GET", "/market-maker-mandates", input ?? {}, undefined, "application/json");
  }

  /** Create a monitoring-only market-maker mandate with an AMM comparison benchmark */
  createMarketMakerMandate(input: CreateMarketMakerMandateInput): Promise<CreateMarketMakerMandateResult> {
    return this.request<CreateMarketMakerMandateResult>("POST", "/market-maker-mandates", input, "application/json", "application/json");
  }

  /** Get one market-maker mandates aggregate */
  getMarketMakerMandates(input: GetMarketMakerMandatesInput): Promise<GetMarketMakerMandatesResult> {
    return this.request<GetMarketMakerMandatesResult>("GET", "/market-maker-mandates/{id}", input, undefined, "application/json");
  }

  /** Pause or revoke a mandate without replacing signed economics */
  supersedeMarketMakerMandates(input: SupersedeMarketMakerMandatesInput): Promise<SupersedeMarketMakerMandatesResult> {
    return this.request<SupersedeMarketMakerMandatesResult>("PATCH", "/market-maker-mandates/{id}", input, "application/json", "application/json");
  }

  /** List incentive programs */
  listIncentivePrograms(input?: ListIncentiveProgramsInput): Promise<ListIncentiveProgramsResult> {
    return this.request<ListIncentiveProgramsResult>("GET", "/incentive-programs", input ?? {}, undefined, "application/json");
  }

  /** Measure an incentive program against frozen baseline evidence and prepare a non-executing review workflow */
  optimizeIncentiveProgram(input: OptimizeIncentiveProgramInput): Promise<OptimizeIncentiveProgramResult> {
    return this.request<OptimizeIncentiveProgramResult>("POST", "/incentive-programs", input, "application/json", "application/json");
  }

  /** Get one incentive programs aggregate */
  getIncentivePrograms(input: GetIncentiveProgramsInput): Promise<GetIncentiveProgramsResult> {
    return this.request<GetIncentiveProgramsResult>("GET", "/incentive-programs/{id}", input, undefined, "application/json");
  }

  /** Revoke an incentive-program result without replacing its evidence */
  supersedeIncentivePrograms(input: SupersedeIncentiveProgramsInput): Promise<SupersedeIncentiveProgramsResult> {
    return this.request<SupersedeIncentiveProgramsResult>("PATCH", "/incentive-programs/{id}", input, "application/json", "application/json");
  }

  /** List liquidity passports */
  listPassports(input?: ListPassportsInput): Promise<ListPassportsResult> {
    return this.request<ListPassportsResult>("GET", "/passports", input ?? {}, undefined, "application/json");
  }

  /** Publish issuer-signed claims recomputed from exact current server evidence */
  publishLiquidityPassport(input: PublishLiquidityPassportInput): Promise<PublishLiquidityPassportResult> {
    return this.request<PublishLiquidityPassportResult>("POST", "/passports", input, "application/json", "application/json");
  }

  /** Get one liquidity passports aggregate */
  getPassports(input: GetPassportsInput): Promise<GetPassportsResult> {
    return this.request<GetPassportsResult>("GET", "/passports/{id}", input, undefined, "application/json");
  }

  /** Download the checked-in v2 OpenAPI contract */
  getOperatingSystemOpenApi(input?: GetOperatingSystemOpenApiInput): Promise<GetOperatingSystemOpenApiResult> {
    return this.request<GetOperatingSystemOpenApiResult>("GET", "/openapi.json", input ?? {}, undefined, "application/json");
  }

  /** Read fail-closed v2 service readiness */
  getOperatingSystemStatus(input?: GetOperatingSystemStatusInput): Promise<GetOperatingSystemStatusResult> {
    return this.request<GetOperatingSystemStatusResult>("GET", "/status", input ?? {}, undefined, "application/json");
  }

  /** Exchange OAuth client credentials for a scoped one-hour token */
  issueOperatingSystemOAuthToken(input: IssueOperatingSystemOAuthTokenInput): Promise<IssueOperatingSystemOAuthTokenResult> {
    return this.request<IssueOperatingSystemOAuthTokenResult>("POST", "/oauth/token", input, "application/x-www-form-urlencoded", "application/json");
  }

  /** Issuer-review and activate an available immutable analyst score draft */
  activateMarketQualityScore(input: ActivateMarketQualityScoreInput): Promise<ActivateMarketQualityScoreResult> {
    return this.request<ActivateMarketQualityScoreResult>("POST", "/scores/{id}/activate", input, "application/json", "application/json");
  }

  /** Create a server-derived quote request bound to the current immutable AutonomyPolicy generation */
  createProtectedExecutionQuoteRequest(input: CreateProtectedExecutionQuoteRequestInput): Promise<CreateProtectedExecutionQuoteRequestResult> {
    return this.request<CreateProtectedExecutionQuoteRequestResult>("POST", "/quote-requests", input, "application/json", "application/json");
  }

  /** Verify and append current-generation signed provider quotes */
  admitProtectedExecutionQuotesForRequest(input: AdmitProtectedExecutionQuotesForRequestInput): Promise<AdmitProtectedExecutionQuotesForRequestResult> {
    return this.request<AdmitProtectedExecutionQuotesForRequestResult>("POST", "/quote-requests/{id}/quotes", input, "application/json", "application/json");
  }

  /** Read materialized child-leg accounting and its deterministic state hash */
  getProtectedExecutionPlanState(input: GetProtectedExecutionPlanStateInput): Promise<GetProtectedExecutionPlanStateResult> {
    return this.request<GetProtectedExecutionPlanStateResult>("GET", "/protected-execution-plans/{id}/state", input, undefined, "application/json");
  }

  /** Request a server-verified typed lifecycle transition without accepting client evidence */
  appendProtectedExecutionLegTransition(input: AppendProtectedExecutionLegTransitionInput): Promise<AppendProtectedExecutionLegTransitionResult> {
    return this.request<AppendProtectedExecutionLegTransitionResult>("POST", "/protected-execution-plans/{id}/transitions", input, "application/json", "application/json");
  }

  /** Append a fresh signed observation for an existing immutable treasury container identity */
  refreshTreasuryLedgerEntry(input: RefreshTreasuryLedgerEntryInput): Promise<RefreshTreasuryLedgerEntryResult> {
    return this.request<RefreshTreasuryLedgerEntryResult>("POST", "/treasury-entries/{id}/refresh", input, "application/json", "application/json");
  }

  /** Append a revoked treasury-container generation with immutable retirement evidence */
  retireTreasuryLedgerEntry(input: RetireTreasuryLedgerEntryInput): Promise<RetireTreasuryLedgerEntryResult> {
    return this.request<RetireTreasuryLedgerEntryResult>("POST", "/treasury-entries/{id}/retire", input, "application/json", "application/json");
  }

  /** Get all release-train availability and aggregate counts */
  getOperatingSystemWorkspace(input?: GetOperatingSystemWorkspaceInput): Promise<GetOperatingSystemWorkspaceResult> {
    return this.request<GetOperatingSystemWorkspaceResult>("GET", "/workspace", input ?? {}, undefined, "application/json");
  }

  /** List tenant-isolated qualified vault metadata projected from authoritative v1 custody records */
  listQualifiedVaultsV2(input?: ListQualifiedVaultsV2Input): Promise<ListQualifiedVaultsV2Result> {
    return this.request<ListQualifiedVaultsV2Result>("GET", "/vaults", input ?? {}, undefined, "application/json");
  }

  /** Read one qualified vault and immutable deployment/control evidence */
  getQualifiedVaultV2(input: GetQualifiedVaultV2Input): Promise<GetQualifiedVaultV2Result> {
    return this.request<GetQualifiedVaultV2Result>("GET", "/vaults/{id}", input, undefined, "application/json");
  }

  /** List canonical inclusion, finality, reconciliation, and attribution receipts */
  listExecutionReceiptsV2(input?: ListExecutionReceiptsV2Input): Promise<ListExecutionReceiptsV2Result> {
    return this.request<ListExecutionReceiptsV2Result>("GET", "/receipts", input ?? {}, undefined, "application/json");
  }

  /** Read one canonical execution receipt projection */
  getExecutionReceiptV2(input: GetExecutionReceiptV2Input): Promise<GetExecutionReceiptV2Result> {
    return this.request<GetExecutionReceiptV2Result>("GET", "/receipts/{id}", input, undefined, "application/json");
  }

  /** List typed anomaly alerts with immutable evidence */
  listAlertsV2(input?: ListAlertsV2Input): Promise<ListAlertsV2Result> {
    return this.request<ListAlertsV2Result>("GET", "/alerts", input ?? {}, undefined, "application/json");
  }

  /** List signed passports and content-addressed proof artifacts */
  listProofV2(input?: ListProofV2Input): Promise<ListProofV2Result> {
    return this.request<ListProofV2Result>("GET", "/proof", input ?? {}, undefined, "application/json");
  }

  /** List tenant-scoped signed provider registrations and health */
  listOperatingSystemProviders(input?: ListOperatingSystemProvidersInput): Promise<ListOperatingSystemProvidersResult> {
    return this.request<ListOperatingSystemProvidersResult>("GET", "/providers", input ?? {}, undefined, "application/json");
  }

  /** Register or rotate an attested provider generation */
  putOperatingSystemProvider(input: PutOperatingSystemProviderInput): Promise<PutOperatingSystemProviderResult> {
    return this.request<PutOperatingSystemProviderResult>("POST", "/providers", input, "application/json", "application/json");
  }

  /** List immutable object-storage lineage for reports and large evidence */
  listOperatingSystemArtifacts(input?: ListOperatingSystemArtifactsInput): Promise<ListOperatingSystemArtifactsResult> {
    return this.request<ListOperatingSystemArtifactsResult>("GET", "/artifacts", input ?? {}, undefined, "application/json");
  }

  /** Get reconciled treasury ledger summary */
  getTreasurySummary(input?: GetTreasurySummaryInput): Promise<GetTreasurySummaryResult> {
    return this.request<GetTreasurySummaryResult>("GET", "/treasury/summary", input ?? {}, undefined, "application/json");
  }

  /** Get the unified read-only/write-authority-aware venue map */
  getUnifiedLiquidityMap(input?: GetUnifiedLiquidityMapInput): Promise<GetUnifiedLiquidityMapResult> {
    return this.request<GetUnifiedLiquidityMapResult>("GET", "/market-map", input ?? {}, undefined, "application/json");
  }

  /** Persist a deterministic non-custodial study with no execution authority */
  runNonCustodialSandboxStudy(input: RunNonCustodialSandboxStudyInput): Promise<RunNonCustodialSandboxStudyResult> {
    return this.request<RunNonCustodialSandboxStudyResult>("POST", "/sandbox/studies", input, "application/json", "application/json");
  }

  /** Create a private expiring or issuer-approved public study link */
  createStudyShareLink(input: CreateStudyShareLinkInput): Promise<CreateStudyShareLinkResult> {
    return this.request<CreateStudyShareLinkResult>("POST", "/studies/{id}/share-links", input, "application/json", "application/json");
  }

  /** Immediately revoke a private or public study share without deleting evidence */
  revokeStudyShareLink(input: RevokeStudyShareLinkInput): Promise<RevokeStudyShareLinkResult> {
    return this.request<RevokeStudyShareLinkResult>("POST", "/study-shares/{id}/revoke", input, "application/json", "application/json");
  }

  /** Immediately revoke a published passport without deleting signed evidence */
  revokeLiquidityPassport(input: RevokeLiquidityPassportInput): Promise<RevokeLiquidityPassportResult> {
    return this.request<RevokeLiquidityPassportResult>("POST", "/passports/{id}/revoke", input, "application/json", "application/json");
  }

  /** Queue a signed JSON, PDF, and CSV report */
  createSignedStudyReport(input: CreateSignedStudyReportInput): Promise<CreateSignedStudyReportResult> {
    return this.request<CreateSignedStudyReportResult>("POST", "/studies/{id}/reports", input, "application/json", "application/json");
  }

  /** List report job state and dead-letter evidence */
  listStudyReportJobs(input: ListStudyReportJobsInput): Promise<ListStudyReportJobsResult> {
    return this.request<ListStudyReportJobsResult>("GET", "/studies/{id}/report-jobs", input, undefined, "application/json");
  }

  /** Wrap immutable v1 Bootstrap, Maintain, or Diversify evidence in the declarative v2 schema */
  wrapLegacyStrategyDefinition(input: WrapLegacyStrategyDefinitionInput): Promise<WrapLegacyStrategyDefinitionResult> {
    return this.request<WrapLegacyStrategyDefinitionResult>("POST", "/strategies/legacy-wrappers", input, "application/json", "application/json");
  }

  /** Derive all eight proposal-admission checks from immutable server-side evidence */
  admitStrategyProposal(input: AdmitStrategyProposalInput): Promise<AdmitStrategyProposalResult> {
    return this.request<AdmitStrategyProposalResult>("POST", "/strategies/{id}/proposal-admissions", input, "application/json", "application/json");
  }

  /** Read exact strategy admission events and their immutable study generations */
  getStrategyEvidence(input: GetStrategyEvidenceInput): Promise<GetStrategyEvidenceResult> {
    return this.request<GetStrategyEvidenceResult>("GET", "/strategies/{id}/evidence", input, undefined, "application/json");
  }

  /** Read optimization and preparation events bound to an exact incentive program generation */
  getIncentiveEvidence(input: GetIncentiveEvidenceInput): Promise<GetIncentiveEvidenceResult> {
    return this.request<GetIncentiveEvidenceResult>("GET", "/incentive-programs/{id}/evidence", input, undefined, "application/json");
  }

  /** Verify independent named reviews and a current signed strategy-registry generation */
  approveStrategyPackage(input: ApproveStrategyPackageInput): Promise<ApproveStrategyPackageResult> {
    return this.request<ApproveStrategyPackageResult>("POST", "/strategy-packages/{id}/approve", input, "application/json", "application/json");
  }

  /** Enter standard activation preparation only from a currently verifiable approved package */
  seedStrategyFromApprovedPackage(input: SeedStrategyFromApprovedPackageInput): Promise<SeedStrategyFromApprovedPackageResult> {
    return this.request<SeedStrategyFromApprovedPackageResult>("POST", "/strategy-packages/{id}/seed-strategy", input, "application/json", "application/json");
  }

  /** Immediately revoke activation eligibility while retaining evidence */
  revokeStrategyPackage(input: RevokeStrategyPackageInput): Promise<RevokeStrategyPackageResult> {
    return this.request<RevokeStrategyPackageResult>("POST", "/strategy-packages/{id}/revoke", input, "application/json", "application/json");
  }

  /** listProposalComments */
  listProposalComments(input: ListProposalCommentsInput): Promise<ListProposalCommentsResult> {
    return this.request<ListProposalCommentsResult>("GET", "/proposals/{id}/comments", input, undefined, "application/json");
  }

  /** appendProposalComment */
  appendProposalComment(input: AppendProposalCommentInput): Promise<AppendProposalCommentResult> {
    return this.request<AppendProposalCommentResult>("POST", "/proposals/{id}/comments", input, "application/json", "application/json");
  }

  /** Append an internal approval or rejection to a current DRAFT/VALIDATED packet */
  decideProposal(input: DecideProposalInput): Promise<DecideProposalResult> {
    return this.request<DecideProposalResult>("POST", "/proposals/{id}/decisions", input, "application/json", "application/json");
  }

  /** Resolve finalized/reconciled issuer-Safe evidence server-side for an exact typed controller action */
  registerProposalSafeSubmission(input: RegisterProposalSafeSubmissionInput): Promise<RegisterProposalSafeSubmissionResult> {
    return this.request<RegisterProposalSafeSubmissionResult>("POST", "/proposals/{id}/safe-submissions", input, "application/json", "application/json");
  }

  /** Build an immutable comparison hash for two to eight decision packets */
  compareProposals(input: CompareProposalsInput): Promise<CompareProposalsResult> {
    return this.request<CompareProposalsResult>("POST", "/proposal-comparisons", input, "application/json", "application/json");
  }

  /** Append a PLANNED dependency-aware event; completion is available only through the approval route */
  appendLaunchTimelineEvent(input: AppendLaunchTimelineEventInput): Promise<AppendLaunchTimelineEventResult> {
    return this.request<AppendLaunchTimelineEventResult>("POST", "/launch-plans/{id}/timeline-events", input, "application/json", "application/json");
  }

  /** Materialize dependency and completion state from immutable events */
  getLaunchTimeline(input: GetLaunchTimelineInput): Promise<GetLaunchTimelineResult> {
    return this.request<GetLaunchTimelineResult>("GET", "/launch-plans/{id}/timeline", input, undefined, "application/json");
  }

  /** Bind a completion receipt after every dependency completes */
  completeLaunchTimelineEvent(input: CompleteLaunchTimelineEventInput): Promise<CompleteLaunchTimelineEventResult> {
    return this.request<CompleteLaunchTimelineEventResult>("POST", "/launch-plans/{id}/timeline-events/{eventId}/complete", input, "application/json", "application/json");
  }

  /** Seed drafts, studies, policy, qualification, and a funding proposal without execution */
  seedLaunchWorkspace(input: SeedLaunchWorkspaceInput): Promise<SeedLaunchWorkspaceResult> {
    return this.request<SeedLaunchWorkspaceResult>("POST", "/launch-plans/{id}/seed-workspace", input, "application/json", "application/json");
  }

  /** Create or append an issuer-intent version from a completed reproducible capital study */
  seedIssuerIntentFromCapitalStudy(input: SeedIssuerIntentFromCapitalStudyInput): Promise<SeedIssuerIntentFromCapitalStudyResult> {
    return this.request<SeedIssuerIntentFromCapitalStudyResult>("POST", "/capital-requirements/{id}/seed-intent", input, "application/json", "application/json");
  }

  /** Create or append a launch-plan draft using deterministic capital-study outputs */
  seedLaunchPlanFromCapitalStudy(input: SeedLaunchPlanFromCapitalStudyInput): Promise<SeedLaunchPlanFromCapitalStudyResult> {
    return this.request<SeedLaunchPlanFromCapitalStudyResult>("POST", "/capital-requirements/{id}/seed-launch-plan", input, "application/json", "application/json");
  }

  /** Append a signed offchain treasury reservation without moving funds */
  reserveTreasuryFromCapitalStudy(input: ReserveTreasuryFromCapitalStudyInput): Promise<ReserveTreasuryFromCapitalStudyResult> {
    return this.request<ReserveTreasuryFromCapitalStudyResult>("POST", "/capital-requirements/{id}/reservations", input, "application/json", "application/json");
  }

  /** Queue signed RPC quorum and finality indexing for one exact current venue-profile generation */
  queueVenueIndex(input: QueueVenueIndexInput): Promise<QueueVenueIndexResult> {
    return this.request<QueueVenueIndexResult>("POST", "/venues/{id}/index-jobs", input, "application/json", "application/json");
  }

  /** Materialize ordered forward and rollback state from immutable transition evidence */
  getMigrationPlanState(input: GetMigrationPlanStateInput): Promise<GetMigrationPlanStateResult> {
    return this.request<GetMigrationPlanStateResult>("GET", "/migration-plans/{id}/state", input, undefined, "application/json");
  }

  /** Request a server-verified action-specific migration lifecycle transition */
  appendMigrationPlanTransition(input: AppendMigrationPlanTransitionInput): Promise<AppendMigrationPlanTransitionResult> {
    return this.request<AppendMigrationPlanTransitionResult>("POST", "/migration-plans/{id}/transitions", input, "application/json", "application/json");
  }

  /** Deterministically compile a non-executable policy draft */
  compilePolicyIntent(input: CompilePolicyIntentInput): Promise<CompilePolicyIntentResult> {
    return this.request<CompilePolicyIntentResult>("POST", "/policy-intent-drafts/{id}/compile", input, "application/json", "application/json");
  }

  /** Create a deterministic typed policy draft without an AI provider */
  createStructuredPolicyIntentDraft(input: CreateStructuredPolicyIntentDraftInput): Promise<CreateStructuredPolicyIntentDraftResult> {
    return this.request<CreateStructuredPolicyIntentDraftResult>("POST", "/policy-intent-drafts/structured", input, "application/json", "application/json");
  }

  /** Validate a manually structured policy and persist non-executable evidence */
  checkAutonomyPolicy(input: CheckAutonomyPolicyInput): Promise<CheckAutonomyPolicyResult> {
    return this.request<CheckAutonomyPolicyResult>("POST", "/policy-checks", input, "application/json", "application/json");
  }

  /** Rotate a hashed API key or OAuth client secret */
  rotateDeveloperCredential(input: RotateDeveloperCredentialInput): Promise<RotateDeveloperCredentialResult> {
    return this.request<RotateDeveloperCredentialResult>("POST", "/developer-credentials/{id}/rotate", input, "application/json", "application/json");
  }

  /** Read issuer aggregates only where bilateral partner consent is active */
  getPartnerPortfolio(input: GetPartnerPortfolioInput): Promise<GetPartnerPortfolioResult> {
    return this.request<GetPartnerPortfolioResult>("GET", "/partner-portfolios/{partnerId}", input, undefined, "application/json");
  }

  /** Review the current partner declarations for this explicitly assigned issuer */
  getPartnerConsentOptions(input: GetPartnerConsentOptionsInput): Promise<GetPartnerConsentOptionsResult> {
    return this.request<GetPartnerConsentOptionsResult>("GET", "/partner-consent-options", input, undefined, "application/json");
  }

  /** Read the exact current actor-scoped consent for preparing an issuer packet */
  getPartnerPreparationContext(input: GetPartnerPreparationContextInput): Promise<GetPartnerPreparationContextResult> {
    return this.request<GetPartnerPreparationContextResult>("GET", "/partner-preparation-contexts/{partnerId}", input, undefined, "application/json");
  }

  /** Read consent-bound partner packets awaiting or completed in issuer review */
  listPartnerPreparations(input?: ListPartnerPreparationsInput): Promise<ListPartnerPreparationsResult> {
    return this.request<ListPartnerPreparationsResult>("GET", "/partner-preparations", input ?? {}, undefined, "application/json");
  }

  /** Import a current consent-bound partner packet as an approval-empty issuer proposal */
  importPartnerPreparation(input: ImportPartnerPreparationInput): Promise<ImportPartnerPreparationResult> {
    return this.request<ImportPartnerPreparationResult>("POST", "/partner-preparations/{eventId}/import", input, "application/json", "application/json");
  }

  /** Record an issuer decline of an exact current consent-bound partner packet */
  declinePartnerPreparation(input: DeclinePartnerPreparationInput): Promise<DeclinePartnerPreparationResult> {
    return this.request<DeclinePartnerPreparationResult>("POST", "/partner-preparations/{eventId}/decline", input, "application/json", "application/json");
  }

  /** Read partner-owned delivery and issuer review status for one exact packet */
  getPartnerPreparationStatus(input: GetPartnerPreparationStatusInput): Promise<GetPartnerPreparationStatusResult> {
    return this.request<GetPartnerPreparationStatusResult>("GET", "/partner-preparation-status/{partnerId}/{eventId}", input, undefined, "application/json");
  }

  /** List tenant-owned domain ownership and HTTPS onboarding challenges */
  listPartnerDomainChallenges(input?: ListPartnerDomainChallengesInput): Promise<ListPartnerDomainChallengesResult> {
    return this.request<ListPartnerDomainChallengesResult>("GET", "/partner-domain-challenges", input ?? {}, undefined, "application/json");
  }

  /** Create an exact-host DNS ownership challenge for an approved domain verifier */
  createPartnerDomainChallenge(input: CreatePartnerDomainChallengeInput): Promise<CreatePartnerDomainChallengeResult> {
    return this.request<CreatePartnerDomainChallengeResult>("POST", "/partner-domain-challenges", input, "application/json", "application/json");
  }

  /** Read one tenant-owned domain onboarding challenge */
  getPartnerDomainChallenge(input: GetPartnerDomainChallengeInput): Promise<GetPartnerDomainChallengeResult> {
    return this.request<GetPartnerDomainChallengeResult>("GET", "/partner-domain-challenges/{id}", input, undefined, "application/json");
  }

  /** Check current DNS ownership, routing and HTTPS readiness */
  getPartnerDomainStatus(input: GetPartnerDomainStatusInput): Promise<GetPartnerDomainStatusResult> {
    return this.request<GetPartnerDomainStatusResult>("GET", "/partner-domain-challenges/{id}/status", input, undefined, "application/json");
  }

  /** Verify the exact DNS TXT response and obtain current signed domain evidence */
  verifyPartnerDomainChallenge(input: VerifyPartnerDomainChallengeInput): Promise<VerifyPartnerDomainChallengeResult> {
    return this.request<VerifyPartnerDomainChallengeResult>("POST", "/partner-domain-challenges/{id}/verify", input, "application/json", "application/json");
  }

  /** Provision a verified partner hostname through the configured HTTPS provider */
  provisionPartnerDomainChallenge(input: ProvisionPartnerDomainChallengeInput): Promise<ProvisionPartnerDomainChallengeResult> {
    return this.request<ProvisionPartnerDomainChallengeResult>("POST", "/partner-domain-challenges/{id}/provision", input, "application/json", "application/json");
  }

  /** Revoke an unbound domain challenge and remove its managed hostname */
  revokePartnerDomainChallenge(input: RevokePartnerDomainChallengeInput): Promise<RevokePartnerDomainChallengeResult> {
    return this.request<RevokePartnerDomainChallengeResult>("POST", "/partner-domain-challenges/{id}/revoke", input, "application/json", "application/json");
  }

  /** Prepare an issuer import packet through exact current bilateral consent without cross-tenant or Safe authority */
  preparePartnerProposal(input: PreparePartnerProposalInput): Promise<PreparePartnerProposalResult> {
    return this.request<PreparePartnerProposalResult>("POST", "/partner-portfolios/{partnerId}/proposal-preparations", input, "application/json", "application/json");
  }

  /** Immediately remove all host bindings for a partner configuration */
  revokePartnerTenant(input: RevokePartnerTenantInput): Promise<RevokePartnerTenantResult> {
    return this.request<RevokePartnerTenantResult>("POST", "/partners/{id}/revoke", input, "application/json", "application/json");
  }

  /** List the issuer tenant’s current bilateral consent records */
  listPartnerConsents(input?: ListPartnerConsentsInput): Promise<ListPartnerConsentsResult> {
    return this.request<ListPartnerConsentsResult>("GET", "/partner-consents", input ?? {}, undefined, "application/json");
  }

  /** Grant or regrant explicit actor-scoped bilateral access */
  grantPartnerConsent(input: GrantPartnerConsentInput): Promise<GrantPartnerConsentResult> {
    return this.request<GrantPartnerConsentResult>("POST", "/partner-consents", input, "application/json", "application/json");
  }

  /** Read one issuer-owned partner consent */
  getPartnerConsent(input: GetPartnerConsentInput): Promise<GetPartnerConsentResult> {
    return this.request<GetPartnerConsentResult>("GET", "/partner-consents/{id}", input, undefined, "application/json");
  }

  /** Immediately revoke portfolio and proposal-preparation access */
  revokePartnerConsent(input: RevokePartnerConsentInput): Promise<RevokePartnerConsentResult> {
    return this.request<RevokePartnerConsentResult>("POST", "/partner-consents/{id}/revoke", input, "application/json", "application/json");
  }

  /** List provenance-preserving market-maker observations and reconciliation state */
  listMarketMakerEvidence(input: ListMarketMakerEvidenceInput): Promise<ListMarketMakerEvidenceResult> {
    return this.request<ListMarketMakerEvidenceResult>("GET", "/market-maker-mandates/{id}/observations", input, undefined, "application/json");
  }

  /** Ingest a finalized onchain or signed API/file/exchange observation without custody authority */
  ingestMarketMakerEvidence(input: IngestMarketMakerEvidenceInput): Promise<IngestMarketMakerEvidenceResult> {
    return this.request<IngestMarketMakerEvidenceResult>("POST", "/market-maker-mandates/{id}/observations", input, "application/json", "application/json");
  }

  /** List fenced worker jobs and dead-letter visibility */
  listOperatingSystemJobs(input?: ListOperatingSystemJobsInput): Promise<ListOperatingSystemJobsResult> {
    return this.request<ListOperatingSystemJobsResult>("GET", "/jobs", input ?? {}, undefined, "application/json");
  }

  /** Verify an issuer-disclosed signed Liquidity Passport */
  getPublicLiquidityPassport(input: GetPublicLiquidityPassportInput): Promise<GetPublicLiquidityPassportResult> {
    return this.request<GetPublicLiquidityPassportResult>("GET", "/public/passports/{slug}", input, undefined, "application/json");
  }

  /** Download deterministic signed JSON, HTML, PDF, or CSV */
  downloadPublicLiquidityPassport(input: DownloadPublicLiquidityPassportInput): Promise<DownloadPublicLiquidityPassportResult> {
    return this.request<DownloadPublicLiquidityPassportResult>("GET", "/public/passports/{slug}/formats/{format}", input, undefined, "application/json, text/html, application/pdf, text/csv");
  }

  /** Download canonical passport, trust anchor, artifact hashes, and registry commitment */
  downloadLiquidityPassportVerificationBundle(input: DownloadLiquidityPassportVerificationBundleInput): Promise<DownloadLiquidityPassportVerificationBundleResult> {
    return this.request<DownloadLiquidityPassportVerificationBundleResult>("GET", "/public/passports/{slug}/verification-bundle", input, undefined, "application/json");
  }

  /** Read a non-revoked study share */
  getSharedSimulationStudy(input: GetSharedSimulationStudyInput): Promise<GetSharedSimulationStudyResult> {
    return this.request<GetSharedSimulationStudyResult>("GET", "/public/studies/{slug}", input, undefined, "application/json");
  }

  /** Resolve a privacy-safe brand only for the exact verified request host */
  getVerifiedHostBrand(input?: GetVerifiedHostBrandInput): Promise<GetVerifiedHostBrandResult> {
    return this.request<GetVerifiedHostBrandResult>("GET", "/public/brands/current", input ?? {}, undefined, "application/json");
  }

  /** Serve the exact current host-bound content-addressed PNG logo */
  getVerifiedPartnerBrandLogo(input: GetVerifiedPartnerBrandLogoInput): Promise<GetVerifiedPartnerBrandLogoResult> {
    return this.request<GetVerifiedPartnerBrandLogoResult>("GET", "/public/partner-brand/logo/{contentHash}", input, undefined, "image/png");
  }

  oauthClientCredentials(clientId: string, clientSecret: string, scopes: string[] = [], signal?: AbortSignal): Promise<IssueOperatingSystemOAuthTokenResult> {
    return this.issueOperatingSystemOAuthToken({
      body: { grant_type: 'client_credentials', ...(scopes.length ? { scope: scopes.join(' ') } : {}) },
      basicAuth: { clientId, clientSecret },
      signal,
    });
  }

  private async request<TResult>(method: string, template: string, input: InternalRequestInput, contentType?: string, accept = 'application/json'): Promise<TResult> {
    const path = template.replace(/\{([^}]+)\}/gu, (_match, name: string) => {
      const value = input.path?.[name];
      if (value === undefined) throw new Error('Missing path parameter ' + name);
      return encodeURIComponent(String(value));
    });
    const url = new URL(this.baseUrl + path);
    for (const [name, value] of Object.entries(input.query ?? {})) if (value !== undefined) url.searchParams.set(name, String(value));
    const headers = new Headers({ accept });
    if (this.options.organizationId) headers.set('x-klineo-organization-id', this.options.organizationId);
    if (this.options.accessToken) headers.set('authorization', 'Bearer ' + this.options.accessToken);
    if (input.basicAuth) headers.set('authorization', 'Basic ' + btoa(encodeURIComponent(input.basicAuth.clientId) + ':' + encodeURIComponent(input.basicAuth.clientSecret)));
    if (input.ifMatch) headers.set('if-match', input.ifMatch.startsWith('"') ? input.ifMatch : '"' + input.ifMatch + '"');
    if (input.idempotencyKey) headers.set('idempotency-key', input.idempotencyKey);
    if (input.body !== undefined && contentType) headers.set('content-type', contentType);
    const body = input.body === undefined ? undefined
      : contentType === 'application/x-www-form-urlencoded'
        ? new URLSearchParams(Object.fromEntries(Object.entries(input.body as Record<string, string | undefined>)
          .filter((entry): entry is [string, string] => entry[1] !== undefined)))
        : JSON.stringify(input.body);
    const response = await this.fetcher(url, {
      method, headers, signal: input.signal, redirect: 'error',
      ...(this.options.credentials === undefined ? {} : { credentials: this.options.credentials }),
      ...(body === undefined ? {} : { body }),
    });
    this.options.onResponse?.(response);
    return this.decode<TResult>(response);
  }

  private async decode<TResult>(response: Response): Promise<TResult> {
    const contentType = (response.headers.get('content-type') ?? '').toLowerCase();
    if (!response.ok) {
      const payload: unknown = contentType.includes('json') ? await response.json().catch(() => null) : null;
      const error = payload && typeof payload === 'object' && 'error' in payload ? payload.error : undefined;
      const detail = error && typeof error === 'object' ? error as Record<string, unknown> : {};
      const code = typeof error === 'string' ? error : typeof detail.code === 'string' ? detail.code : 'LIQUIDITY_OS_REQUEST_FAILED';
      const message = typeof detail.message === 'string' ? detail.message : 'HTTP ' + response.status;
      const correlationId = typeof detail.correlationId === 'string' ? detail.correlationId : undefined;
      throw new LiquidityOsApiError(response.status, code, message, correlationId, payload, response.headers.get('retry-after') ?? undefined, typeof detail.retryable === 'boolean' ? detail.retryable : undefined);
    }
    if (response.status === 204) return undefined as TResult;
    if (!contentType.includes('json')) return new Uint8Array(await response.arrayBuffer()) as TResult;
    return await response.json() as TResult;
  }
}
