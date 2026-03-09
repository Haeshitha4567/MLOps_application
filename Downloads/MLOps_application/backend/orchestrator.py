from typing import List, Dict, Any
from .agents import DataAnalyticsAgent, CloudStrategyAgent, EnterpriseSoftwareAgent

class Orchestrator:
    def __init__(self):
        # Initialize the Kanvasia consulting agents
        self.agents = {
            "data": DataAnalyticsAgent(),
            "cloud": CloudStrategyAgent(),
            "software": EnterpriseSoftwareAgent()
        }

    def determine_relevant_agents(self, prompt: str) -> List[str]:
        """
        Simple heuristic routing. In a real system, an LLM would do this.
        """
        prompt_lower = prompt.lower()
        active_agents = []
        
        if any(word in prompt_lower for word in ["data", "analytics", "trend", "insight", "predict", "machine", "ml"]):
            active_agents.append("data")
            
        if any(word in prompt_lower for word in ["cloud", "scale", "aws", "gcp", "azure", "infrastructure", "migrate"]):
            active_agents.append("cloud")
            
        if any(word in prompt_lower for word in ["software", "app", "system", "architecture", "develop", "api", "backend", "frontend"]):
            active_agents.append("software")
            
        # Fallback
        if not active_agents:
            active_agents = ["data", "cloud", "software"]
            
        return active_agents

    def run_workflow(self, prompt: str) -> Dict[str, Any]:
        """
        Runs the prompt through the relevant agents and synthesizes the result.
        """
        active_agent_keys = self.determine_relevant_agents(prompt)
        
        results = []
        for key in active_agent_keys:
            agent = self.agents[key]
            response = agent.process_task(prompt)
            results.append(response.model_dump())
            
        summary = f"Based on a comprehensive review of your request regarding '{prompt[:50]}...', "
        summary += f"our Kanvasia Virtual Consultants have developed a strategy leveraging {len(active_agent_keys)} core disciplines. "
        summary += "Please review the detailed agent reports above."
        
        return {
            "prompt": prompt,
            "agent_responses": results,
            "executive_summary": summary
        }
